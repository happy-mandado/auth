module.exports = {
  api: {
    version: 'v1',
    cors: {
      origin: [
        // 'https://happymandado.com',
        'https://bernuzz.com',
      ],
      credentials: true,
    },
    port: 80,
    auth: {
      // callbackURL: 'https://auth.happymandado.com/v1/callback',
      callbackURL: 'https://auth.bernuzz.com/v1/callback',
      // redirectURL: 'https://app.happymandado.com',
      redirectURL: 'https://bernuzz.com',
    },
    cookie: {
      name: 'mandado',
      secure: true,
      secret: '',
      // domain: '.mandado.com',
      domain: '.bernuzz.com',
      proxy: true,
      path: '/',
    },
  },
  database: {
    database: 'db_production',
  },
};
