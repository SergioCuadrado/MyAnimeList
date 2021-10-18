const express = require('express');
const router = express.Router();

const passport = require('passport');

router.post(
  '/signup',
  passport.authenticate('local.signup', {
    //Route to be rerouted if all goes well
    successRedirect: '/anime',
    failureRedirect: '/',
    failureFlash: true,
  })
);

module.exports = router;
