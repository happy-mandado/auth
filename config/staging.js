module.exports = {
  api: {
    version: 'v1',
    cors: {
      origin: [
        'https://staging.your-domain.com',
      ],
      credentials: true,
    },
    port: 80,
    auth: {
      domain: '',
      clientId: '',
      clientSecret: '',
      callbackURL: 'https://your-domain-auth-staging.heroku.com/v1/callback',
      redirectURL: '',
    },
    cookie: {
      name: '',
      secure: true,
      secret: '',
    },
  },
  database: {
    database: 'db_staging',
  },
};
