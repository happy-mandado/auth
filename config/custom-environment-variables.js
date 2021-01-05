module.exports = {
  api: {
    auth: {
      domain: 'API_AUTH_DOMAIN',
      scope: 'API_AUTH_SCOPE',
      clientId: 'API_AUTH_CLIENT_ID',
      clientSecret: 'API_AUTH_CLIENT_SECRET',
      callbackURL: 'API_AUTH_CALLBACK_URL',
      redirectURL: 'API_AUTH_REDIRECT_URL',
      logoutURL: 'API_AUTH_LOGOUT_URL',
    },
    cookie: {
      name: 'API_COOKIE_NAME',
      secure: 'API_COOKIE_SECURE',
      secret: 'API_COOKIE_SECRET',
      domain: 'API_COOKIE_DOMAIN',
      path: 'API_COOKIE_PATH',
      proxy: 'API_COOKIE_PROXY',
    },
    cors: {
      origin: 'API_CORS_ORIGIN',
      credentials: 'API_CORS_CREDENTIALS',
    },
    port: 'PORT', // HEROKU NAMING CONVENTION
    version: 'API_VERSION',
  },
  database: {
    driver: 'DB_DRIVER',
    name: 'DB_NAME',
  },
};
