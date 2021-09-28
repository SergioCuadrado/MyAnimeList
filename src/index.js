const express = require('express');
// Mensajes de la consola
const morgan = require('morgan');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 4000);
// Settings

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/user', require('./routes/anime.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
