const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express(); // set up the app
const port = process.env.PORT || 8000;

// Define path for Express config
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
// const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs'); // set up using hbs for templating
app.set('views', viewsPath); // set up custom folder for hbs to look for templates. rootFoldr/views is default
app.use(express.static(publicDirectory)); // set up path to static files

// hbs.registerPartials(partialsPath);

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Life game app',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'You need help? REALLY???',
    message:
      'What do you want to see here?\nJust go to the home page and enter your city. And then you will see the weather forecast\nYou can do it :)',
    name: 'Pavel AlchemixXx',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me page',
    name: 'Pavel AlchemixXx',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'help/404',
    message: 'Help article not found',
    name: 'not me :)',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    message: 'page not found, sorry',
    name: 'not me :)',
  });
});

// Run the server
app.listen(port, () => {
  console.log(`Server started at port ${port}.`);
});
