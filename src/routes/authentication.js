const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../app/lib/auth');

router.post(
  '/signup',
  isNotLoggedIn,
  passport.authenticate('local.signup', {
    //Route to be rerouted if all goes well
    successRedirect: '/anime',
    failureRedirect: '/signup',
    failureFlash: true,
  })
);

router.post('/signin', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local.signin', {
    successRedirect: '/anime',
    failureFlash: '/signin',
    failureFlash: true,
  })(req, res, next);
});

/*// isLoggedIn para comprobar si tiene una session o no para poder acceder a esa ruta.
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});
*/
// Close session, the logOut() comes from a function of the passport
router.get('/logout', isLoggedIn, (req, res) => {
  req.logOut();
  console.log('Closed session');
  res.redirect('/anime');
});

module.exports = router;
