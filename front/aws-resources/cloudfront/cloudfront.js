export async function handler (event) {

 // const appDomain = process.env.APP_DOMAIN;
  const response = event.response;
  const headers = response.headers;


  headers['strict-transport-security'] = {value: 'max-age=63072000; includeSubdomains; preload'};
  headers['content-security-policy'] = {value: "default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'; frame-ancestors 'none'"};
  headers['x-content-type-options'] = {value: 'nosniff'};
  headers['x-frame-options'] = {value: 'DENY'};
  headers['x-xss-protection'] = {value: '1; mode=block'};
  headers['referrer-policy'] = {value: 'same-origin'};

  return response;
}
