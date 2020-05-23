module.exports = {
  api: {
    version: 'v1',
    cors: {
      origin: [
        'https://mandado.com',
      ],
      credentials: true,
    },
    port: 80,
    auth: {
      domain: '',
      scope: 'openid email profile',
      clientId: '',
      clientSecret: '',
      callbackURL: 'https://auth.mandado.com/v1/callback',
      redirectURL: 'https://app.mandado.com',
    },
    cookie: {
      name: 'mandado',
      secure: true,
      secret: '',
      domain: '.mandado.com',
      proxy: true,
      path: '/',
    },
  },
  database: {
    database: 'db_production',
  },
};
