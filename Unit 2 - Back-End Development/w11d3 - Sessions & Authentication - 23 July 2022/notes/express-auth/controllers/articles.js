const express = require('express');
const Article = require('../models/article.js'); // Need this to load mongoose schema
const articles = express.Router();

articles.use((req, res) => {
  if(!req.session.currentUser) {
    res.redirect('/sessions/new');
  }
});

articles.get('/', async (req, res) => {
  const articles = await Article.find({author: req.session?.currentUser?._id}) // Find all article of "author" is currentUser ID
  res.render('articles/index.ejs', { articles, currentUser: req.session.currentUser });
});

articles.get('/new', (req, res) => {
  res.render('articles/new.ejs');
});

articles.post('/', (req, res) => {
  // To add article data with auther info
  const articleData = {
    ...req.body,
    author: req.session.currentUser._id
  }

  Article.create(articleData, (err, createdArticle)=>{
    res.redirect('/articles');
  });
});

module.exports = articles;
