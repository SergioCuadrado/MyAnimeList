module.exports = {
  // 'isAuthenticated' comes from 'passport', Check if the session exists or not.
  // This is so that if you are not logged in and try to access a protected path such as /profile then you are redirected to /signin.
  isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/signin');
  },

  isNotLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/');
  },
};
