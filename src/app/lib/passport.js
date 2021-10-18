const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../../database');
const helpers = require('../lib/helpers');

// Create new User
passport.use(
  'local.signup',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const { fullname } = req.body;
      const newUser = {
        username,
        password,
        fullname,
      };
      // Encrypting the password
      newUser.password = await helpers.encryptPassword(password);

      const result = await pool.query('INSERT INTO users SET ?', [newUser]);
      newUser.id = result.insertId;
      return done(null, newUser);
    }
  )
);

// Log in
passport.use(
  'local.signin',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      console.log(req.body);
      const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
      // Checking if the user exists.
      if (rows.length > 0) {
        const user = rows[0];
        // Checking if the password is the same or if it is another user with the same name
        const validPassword = await helpers.matchPassword(password, user.password);
        if (validPassword) {
          // If it has been validated, you will be redirected
          done(null, user, req.flash('success', 'Welcome' + user.username));
        } else {
          // If not redirect to the page /signin
          done(null, false, req.flash('message', 'Incorrect Username/Password'));
        }
      } else {
        // Redirect to /signin
        return done(null, false, req.flash('message', 'Incorrect Username/Password'));
      }
    }
  )
);

// Save user in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
  done(null, rows[0]);
});
