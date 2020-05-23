const express = require('express');
const passport = require('passport');

module.exports = (
  db, _app, { path, domain, scope, redirectURL, secure, name, version }
) => {
  const router = express.Router();

  router.get('/login', passport.authenticate('auth0', { scope }), function (req, res) {
    res.redirect(redirectURL);
  });

  router.get('/logout', (req, res) => {
    // Access Token Cookie
    res.clearCookie(name + '-at', { path, domain });
    // User Profile Cookie
    res.clearCookie(name + '-pr', { path, domain });

    res.redirect(redirectURL);
  });

  router.get('/callback', function (req, res, next) {
    passport.authenticate('auth0', function (err, user, extraParams) {
      if (err) {
        console.log(err);
        return next(err);
      }

      if (!user) {
        return res.redirect(`/${version}/login`);
      }

      // Access Token Cookie
      res.cookie(
        name + '-at',
        extraParams.access_token,
        { httpOnly: true, secure, domain }
      );

      // User Profile Cookie
      res.cookie(
        name + '-pr',
        user,
        { httpOnly: false, secure, domain }
      );

      res.redirect(redirectURL);

    })(req, res, next);
  });

  return router;
}
