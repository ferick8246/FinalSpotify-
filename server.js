const routes = require('./controllers/songs_controller.js');
const express = require('express');
const request = require('request');
const querystring = require('querystring');
const exphbs = require('express-handlebars');
const db = require('./models');

const app = express();

const PORT = process.env.PORT || 3000;


// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// app.use('/js', express.static(__dirname + './../public/js'));
app.use(express.json());
app.use(routes);


// TEMPLATES
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

db.sequelize.sync().then(function () {
  app.listen(PORT, () =>
    console.log(
      `Listening on http://localhost:${PORT}. Go to /login to initiate authentication flow.`
    )
  );
});