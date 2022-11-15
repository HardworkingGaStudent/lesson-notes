# <span><img src="../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Express - Authentication (Build Along)

## At the end of this lesson, you should:

1. Initialize Directory
1. Start Express
1. Create Index Page
1. Create User Controller
1. Create User New Page
1. Start Mongo
1. Create User Model
1. Create User Create Route
1. Create Session Controller
1. Create Session New Page
1. Create Session Create Route
1. Add User to Session On Log In
1. Create Custom Message for Logged In Users on Index Page
1. Create Log Out Button for Logged In Users on Index Page
1. Create Session Delete Route
1. Create Link To "Special" Page For Logged In Users
1. Disallow Users Not Logged In From "Special" Page
1. Encrypt Password On Create User
1. Compare Password On Login

## Initialize Directory

1. `mkdir express-auth`
1. `cd express-auth`
1. `npm init`
    - set entry point to server.js
1. `touch server.js`
1. `npx nodemon`

## Start Express

1. `npm install express --save`
1. Require Express and Listen in server.js

```javascript
const express = require('express');
const app = express();

app.listen(3000, ()=>{
  console.log('listening...');
});
```

## Create Index Page

server.js

```javascript
app.get('/', (req, res) => {
  res.render('index.ejs');
});
```

1. `npm install ejs --save`
1. `mkdir views`
1. `touch views/index.ejs`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <nav>
      <ul>
        <li><a href="/sessions/new">Log In</a></li>
        <li><a href="/users/new">Register</a></li>
      </ul>
    </nav>
  </body>
</html>
```

## Create User Controller

1. `mkdir controllers`
1. `touch controllers/users.js`

controllers/users.js
```javascript
const express = require('express');
const users = express.Router();

users.get('/new', (req, res) => {
  res.render('users/new.ejs');
});

module.exports = users;
```

server.js
```javascript
const usersController = require('./controllers/users.js');
app.use('/users', usersController);
```

## Create User New Page

1. `mkdir -p views/users`
1. `touch views/users/new.ejs`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Create User</h1>
    <form action="/users" method="POST">
      <input type="text" name="username" placeholder="username"/>
      <input type="password" name="password" />
      <input type="submit" value="Create User" />
    </form>
  </body>
</html>
```

## Start Mongo

1. `npm install mongoose --save`
1. In another tab `mongo`

server.js

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express-auth');
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});
```

## Create User Model

1. `mkdir models`
1. `touch models/user.js`

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

## Create User Create Route

1. use body parser in server.js

```javascript
app.use(express.urlencoded({extended: false}));
```

controllers/users.js
```javascript
const User = require('../models/user.js');

//...farther down the page
users.post('/', (req, res) => {
  User.create(req.body, (err, createdUser)=>{
    res.redirect('/');
  });
});
```

## Create Session Controller

`touch controllers/sessions.js`

```javascript
const express = require('express');
const sessions = express.Router();

module.exports = sessions;
```

server.js

```javascript
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);
```

## Create Session New Page

controllers/sessions.js

```javascript
sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs');
});
```

1. `mkdir views/sessions`
1. `touch views/sessions/new.ejs`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Sign In</h1>
    <form action="/sessions" method="POST">
      <input type="text" name="username" placeholder="username"/>
      <input type="password" name="password" />
      <input type="submit" value="Log In" />
    </form>
  </body>
</html>
```

## Create Session Create Route

controllers/sessions.js

```javascript
const User = require('../models/user.js');

//...farther down the page
sessions.post('/', (req, res)=>{
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if(req.body.password == foundUser.password){
      res.send('logged in');
    } else {
      res.send('wrong password');
    }
  });
});
```

## Add User to Session On Log In

1. `npm install express-session --save`
1. Require and Use express-session in server.js

```javascript
const session = require('express-session');

//...farther down the page
app.use(session({
  secret: "feedmeseymour", //some random string
  resave: false,
  saveUninitialized: false
}));
```

controllers/sessions.js

```javascript
sessions.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser)=>{
    if(req.body.password == foundUser.password){
      req.session.currentUser = foundUser;
      res.redirect('/');
    } else {
      res.send('wrong password');
    }
  });
});
```

## Create Custom Message for Logged In Users on Index Page

server.js

```javascript
app.get('/', (req, res)=>{
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  });
});
```

views/index.ejs

```html
<h1>
  <% if (currentUser) { %>
    Welcome <%= currentUser.username %>!
  <% } else { %>
    Welcome!
  <% } %>
</h1>
```

## Create Log Out Button for Logged In Users on Index Page

views/index.ejs

```html
<% if (currentUser) { %>
  <li>
    <form action="/sessions?_method=DELETE" method="POST">
      <input type="submit" value="Logout"/>
    </form>
  </li>
<% } else { %>
  <li><a href="/sessions/new">Log In</a></li>
  <li><a href="/users/new">Register</a></li>
<% } %>
```

## Create Session Delete Route

1. `npm install method-override --save`
1. Require/Use it in server.js

```javascript
const methodOverride = require('method-override');

//...farther down the page
app.use(methodOverride('_method'));
```

controllers/sessions.js

```javascript
sessions.delete('/', (req, res) => {
  req.session.destroy(()=>{
    res.redirect('/');
  });
})
```

## Create Link To "Special" Page For Logged In Users

views/index.ejs

```html
<% if (currentUser) { %>
<main>
  Welcome to the <a href="/app">party</a>
</main>
<% } %>
```

server.js

```javascript
app.get('/app', (req, res)=>{
  res.send('the party');
});
```

## Disallow Users Not Logged In From "Special" Page

server.js

```javascript
app.get('/app', (req, res)=>{
  if(req.session.currentUser){
    res.send('the party');
  } else {
    res.redirect('/sessions/new');
  }
});
```

## Encrypt Password On Create User

1. `npm install bcrypt --save`
1. controllers/users.js

```javascript
const bcrypt = require('bcrypt');

//...farther down the page
users.post('/', (req, res)=>{
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (err, createdUser)=>{
    res.redirect('/');
  });
});
```

## Compare Password On Login

controllers/sessions.js

```javascript
const bcrypt = require('bcrypt');

//...farther down the page
sessions.post('/', (req, res)=>{
  User.findOne({ username: req.body.username },(err, foundUser) => {
    if( bcrypt.compareSync(req.body.password, foundUser.password) ){
      req.session.currentUser = foundUser;
      res.redirect('/');
    } else {
      res.send('wrong password');
    }
  });
});
```

## Create Article Model

1. `touch models/article.js`

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: { type: String, required: true, unique: true },
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	body: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
```

## Create Article Routes

1. use body parser in server.js

```javascript
app.use(express.urlencoded({extended: false}));
```

controllers/articles.js
```javascript
const express = require('express');
const Article = require('../models/article.js'); // Need this to load mongoose schema
const articles = express.Router();

articles.get('/', async (req, res) => {
  if(req.session.currentUser){
    const articles = await Article.find({author: req.session?.currentUser?._id}) // Find all article of "author" is currentUser ID
    res.render('articles/index.ejs', { articles, currentUser: req.session.currentUser });
  } else {
    res.redirect('/sessions/new');
  }
});

articles.get('/new', (req, res) => {
  if(req.session.currentUser){
    res.render('articles/new.ejs');
  } else {
    res.redirect('/sessions/new');
  }
});

articles.post('/', (req, res) => {
  if(req.session.currentUser){
    // To add article data with auther info
    const articleData = {
      ...req.body,
      author: req.session.currentUser._id
    }

    Article.create(articleData, (err, createdArticle)=>{
      res.redirect('/articles');
    });
  } else {
    res.redirect('/sessions/new');
  }
});

module.exports = articles;

```

## Create views for article

### Index view

1. `mkdir -p views/articles`
1. `touch views/articles/index.ejs`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  <style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    th {
      background-color: #dddddd;
    }
  </style>
  </head>
  <body>
    <header>
      <h1><%= currentUser.username %>'s Article</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/articles/new">Create Articles</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <h2>Articles</h2>
      <table style="">
        <tr>
          <th>title</th>
          <th>body</th>
        </tr>
        <% articles.forEach((article) => { %>
          <tr>
            <td><%= article.title %></td>
            <td><%= article.body %></td>
          </tr>
        <% }) %>
      </table>
    </main>
  </body>
</html>
```

### New view

1. `mkdir -p views/articles`
1. `touch views/articles/new.ejs`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <header>
      <h1>Create an Article</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/articles">Articles Index</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <form action="/articles" method="post">
        <input type="text" name="title" placeholder="Title" /><br/>
        <textarea name="body" placeholder="Body"></textarea><br/>
        <input type="submit" value="Publish Article"/>
      </form>
    </main>
  </body>
</html>
```