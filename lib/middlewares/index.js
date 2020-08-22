const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');


const auth = (cookieName, audience, domain, scope, origin) => (req, res, next) => {
  const accessToken = req.cookies[`${cookieName}-at`];
  req.headers['authorization'] = `Bearer ${accessToken}`;

  const secret = jwks.expressJwtSecret({
    cache: false,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  });

  return jwt({
    secret,
    aud: audience,
    issuer: `https://${domain}/`,
    algorithms: ['RS256'],
    scope,
  })(req, res, next);
}

module.exports = ({cookieName, audience, domain, scope, origin, credentials}) => ({
  auth: auth(cookieName, audience, domain, scope, origin),
  cors: cors({ origin, credentials }),
});
