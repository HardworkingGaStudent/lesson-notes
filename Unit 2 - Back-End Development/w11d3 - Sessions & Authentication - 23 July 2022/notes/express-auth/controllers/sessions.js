const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const express = require('express');
const sessions = express.Router();

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs');
});

sessions.post('/', (req, res)=>{
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if(bcrypt.compareSync(req.body.password, foundUser?.password)) {
      req.session.currentUser = foundUser;
      res.redirect('/');
    } else {
      res.send('wrong password');
    }
  });
});

sessions.delete('/', (req, res) => {
  req.session.destroy(()=>{
    res.redirect('/');
  });
});

module.exports = sessions;
