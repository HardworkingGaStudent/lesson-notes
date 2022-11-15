const session = require('express-session');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/express-auth');
mongoose.connection.once('open', () => {
  console.log(' -----> Connected to mongo <-----');
});

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: "feedmeseymour", //some random string
  resave: false,
  saveUninitialized: false,
  // cookie: {
  //   httpOnly: false
  // }
}));

app.listen(3000, () => {
  console.log('listening...');
});

app.get('/', (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  });
});

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

const articlesController = require('./controllers/articles.js');
app.use('/articles', articlesController);
