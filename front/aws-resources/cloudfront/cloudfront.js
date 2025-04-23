module.exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  headers['strict-transport-security'] = [
    { key: 'strict-transport-security', value: 'max-age=63072000; includeSubdomains; preload' }
  ];
  // headers['content-security-policy'] = [
  //   { key: 'content-security-policy', value: "default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'; frame-ancestors 'none'" }
  // ];
  // headers['x-content-type-options'] = [
  //   { key: 'x-content-type-options', value: 'nosniff' }
  // ];
  // headers['x-frame-options'] = [
  //   { key: 'x-frame-options', value: 'DENY' }
  // ];
  headers['x-xss-protection'] = [
    { key: 'x-xss-protection', value: '1; mode=block' }
  ];
  // headers['referrer-policy'] = [
  //   { key: 'referrer-policy', value: 'same-origin' }
  // ];


  return callback(null, response);
};

