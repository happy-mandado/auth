module.exports = {
  api: {
    version: 'v1',
    cors: {
      origin: [
        'http://app.your-domain.local:3000',
      ],
      credentials: true,
    },
    port: 8080,
    auth: {
      domain: '',
      scope: 'openid email profile',
      clientId: '',
      clientSecret: '',
      callbackURL: 'http://auth.your-domain.local:8080/v1/callback',
      redirectURL: 'http://app.your-domain.local:3000',
    },
    cookie: {
      name: 'cookie-name',
      secure: false,
      secret: 'secret',
      domain: '.your-domain.local',
      path: '/',
      proxy: false,
    },
  },
  database: {
    database: 'db_develop',
  },
};
