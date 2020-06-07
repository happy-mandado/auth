module.exports = {
  api: {
    version: 'v1',
    cors: {
      origin: [
        'http://happymandado.local:3000',
      ],
      credentials: true,
    },
    port: 8080,
    auth: {
      callbackURL: 'http://auth.happymandado.local:8080/v1/callback',
      redirectURL: 'http://happymandado.local:3000',
    },
    cookie: {
      name: 'mandado-dev',
      secure: false,
      secret: 'secret',
      domain: '.happymandado.local',
      path: '/',
      proxy: false,
    },
  },
  database: {
    database: 'db_develop',
  },
};
