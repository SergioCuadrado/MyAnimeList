const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../app/lib/auth');
router.post(
  '/signup',
  passport.authenticate('local.signup', {
    //Route to be rerouted if all goes well
    successRedirect: '/anime',
    failureRedirect: '/signup',
    failureFlash: true,
  })
);

router.post('/signin', (req, res, next) => {
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
// Cerrar session, el logOut() viene de una funcion del passport
router.get('/logout', isLoggedIn, (req, res) => {
  req.logOut();
  console.log('Session cerrada');
  res.redirect('/signin');
});

module.exports = router;
