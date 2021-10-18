const express = require('express');
// Mensajes de la consola
const morgan = require('morgan');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');

const MySQLStore = require('express-mysql-session');
const passport = require('passport');

const { database } = require('./keys');

// Initializations
const app = express();
require('./app/lib/passport');

app.set('port', process.env.PORT || 4000);
/* app.set('view engine', 'jsx'); */
// Settings

// Middlewares
app.use(
  session({
    secret: 'sergiomysqlnodesession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
  })
);

app.use(flash());
app.use(morgan('dev'));
// Para aceptar desde los formularios los datos que me envian los usuarios. Solo aceptar nombres, datos en string, datos simples y NO imagenes.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Global Variables
app.use((req, res, next) => {
  // Obteniendo el mensaje del 'success', para tenerlo en mis vistas.
  app.locals.success = req.flash('success');
  app.locals.message = req.flash('message');
  // Almacenando la informacion del usuario en la session para poder utilizar esta variable para cualquier vista
  app.locals.user = req.user;
  next();
});

// Routes
app.use('/api/anime', require('./routes/anime.routes'));
app.use(require('./routes/authentication'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
// Get all routes from react router.
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
