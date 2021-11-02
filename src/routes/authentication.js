const express = require('express');
const router = express.Router();

const pool = require('../database');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../app/lib/auth');

// Know if a user is logged in and get the user.
router.get('/getuser', (req, res) => {
  res.send(req.user);
});

// Get all the anime list of the logged in user and send to 'AnimeList'
router.get('/animelist', async (req, res) => {
  if(req.user) {

    const animefromUserArray = await pool.query('SELECT * FROM user_animeManga WHERE user_id = ?', [req.user.id]);
    let biblio = [];
    let infoofAnimes;
  
    for (let i = 0; i < animefromUserArray.length; i++) {
      infoofAnimes = await pool.query('SELECT * FROM animeManga WHERE id = ?', [animefromUserArray[i].animeManga_id]);
      biblio.push(infoofAnimes);
    }
  
    res.json(biblio);
  }
});

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

// Add anime to your anime list
router.post('/anime/:id', isLoggedIn, async (req, res, done) => {
  const newAnime = {
    id: req.body[0],
    title: req.body[1],
    type: req.body[2],
    synopsis: req.body[3],
    url_image: req.body[4],
    episodeCount: req.body[5],
  };
  const rows = await pool.query('SELECT * FROM animeManga WHERE id = ?', [newAnime.id]);

  // Checking if the anime exists in the table 'animeManga'.
  if (rows.length <= 0) {
    const result = await pool.query('INSERT INTO animeManga SET ?', [newAnime]);
  }

  // Check if the user has that anime in the list.
  const rows2 = await pool.query('SELECT * FROM user_animeManga WHERE user_id = ? AND animeManga_id = ?', [req.user.id, newAnime.id]);
  if (rows2.length <= 0) {
    const result2 = await pool.query('INSERT INTO user_animeManga (user_id, animeManga_id) VALUES (? , ?)', [req.user.id, newAnime.id]);

    return done(null, newAnime);
  } else {
    return done(null, false);
  }
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
  res.redirect('/');
});

module.exports = router;
