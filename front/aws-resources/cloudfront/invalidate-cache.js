const exec = require('child_process').exec;

const args = process.argv
const stage = args[2]?.split('=')[1] ?? 'dev'
const distributionId = stage === 'dev' ? 'EN6GBANYRUX88' : ''


const invalidateCmd = `aws cloudfront create-invalidation --distribution-id ${distributionId} --output=text --paths "/*"`


exec(invalidateCmd, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        // Note: Some commands might output informational messages to stderr
    }
    console.log(`stdout:\n${stdout}`);
});

console.log(`Running command: ${invalidateCmd}`);

