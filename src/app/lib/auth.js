module.exports = {
  // isAuthenticated viene de passport, Comprueba si existe la session o no
  // Esto es para que si no estas logeado y intentas acceder a una ruta protegida como /profile entonces te rediccionara hacia /signin
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
    return res.redirect('/profile');
  },
};
