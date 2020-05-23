module.exports = {
  api: {
    version: 'v1',
    cors: {
      origin: [
        'https://your-domain.com',
      ],
      credentials: true,
    },
    port: 80,
    auth: {
      domain: '',
      scope: 'openid email profile',
      clientId: '',
      clientSecret: '',
      callbackURL: 'https://auth.your-domain.com/v1/callback',
      redirectURL: 'https://app.your-domain.com',
    },
    cookie: {
      name: 'cookie-name',
      secure: true,
      secret: '',
      domain: '.your-domain.co',
      proxy: true,
      path: '/',
    },
  },
  database: {
    database: 'db_production',
  },
};
