
import jwt from 'jsonwebtoken';
import {JwksClient} from "jwks-rsa";

const API_STAGE = process.env.API_STAGE ?? 'dev';
const ACCOUNT_ID = process.env.ACCOUNT_ID ?? 'no-account-id-set-in-environment-error';

export const auth = async (event, context) => {

    /** Getting auth header **/
    const authHeader = event?.headers?.Authorization || event?.headers?.authorization || 'test'
    if (!authHeader) {
        console.error('No Authorization Token');
        return generatePolicy('Deny', 'Unknown', event);
    }

    try {

        /** Extracting and decoding token  **/
        const [method, token] = authHeader.split(' ');
        console.info(`Auth method received ${method}`)


        const decodedJWT = jwt.decode(token, {complete: true});
        console.info(`Auth requested for ${decodedJWT?.payload?.email} ${decodedJWT?.payload?.name}`)

        /** Getting public key **/
        const client = new JwksClient({
            jwksUri: 'https://my-sug.au.auth0.com/.well-known/jwks.json',
            getKeysInterceptor: () => {
                /** Caching would not work on lambda, deploy a local copy of the public key with the handler **/
                const file = fs.readFileSync(`./${API_STAGE}.public.key.json`);
                return file.keys;
            }
        });

        const keys = await client.getSigningKeys();

        if(keys.length === 0) {
            console.error('JwksClient: No keys');
            return generatePolicy('Deny', 'Unknown', event);
        }

        /** Validating token and generating aws access policy **/
        const key = keys.find((k) => k.kid === decodedJWT?.header?.kid)
        if( !key ) {
            console.error('JwksClient: No Kid Key is matching token kid');
            return generatePolicy('Deny', 'Unknown', event);
        }

        const signingKey = key.publicKey || key.rsaPublicKey;
        const signingAlgorithm = key.alg ?? 'RS256'
        const verifiedToken = jwt.verify(
            token,
            signingKey,{
                    algorithms: [signingAlgorithm],
                    clockTolerance: 10,
        });

        if(verifiedToken && verifiedToken?.sub) {
            console.info(`Auth accepted for ${verifiedToken?.email} ${verifiedToken?.name}`)
            return generatePolicy('Allow', verifiedToken?.sub, event);

        } else {
            console.error('jwt.verify: Token is not valid');
            return generatePolicy('Deny', 'Unknown', event);
        }

    } catch (e) {
        console.error('Auth Critical Error:');
        console.error(e);
        return generatePolicy('Deny', 'Unknown', event);
    }
}


const generatePolicy = (effect, principalId, event) => {
    const authResponse = {
        principalId,
        policyDocument: {
            Version: '2012-10-17',
            Statement: [],
        },
    };

    if (effect && event?.requestContext) {
        const apiScope = `arn:aws:execute-api:ap-southeast-2:${ACCOUNT_ID}:${event?.requestContext.apiId}/${event?.requestContext.stage}/*`;
        authResponse.policyDocument.Statement.push({
            Action: 'execute-api:Invoke',
            Effect: effect,
            Resource: apiScope,
        });

    } else {
        console.error(`generatePolicy failed: methodArn not defined ${event}`);
        authResponse.policyDocument.Statement.push({
            Action: 'execute-api:Invoke',
            Effect: 'Deny',
            Resource: 'execute-api:/*',
        });
    }
    return authResponse;
};