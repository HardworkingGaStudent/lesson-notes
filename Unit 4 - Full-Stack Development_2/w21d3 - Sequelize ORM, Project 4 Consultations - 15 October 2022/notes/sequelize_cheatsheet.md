# Sequelize Cheat Sheet

Sequelize documentation is horrendous, so here's a handy cheat sheet.

## Sequelize/PostgreSQL commands

### Initialize Sequelize

```
npx sequelize init
```

### Create a database

```
npx sequelize db:create
```

### Create a Sequelize Model

**NOTE:** The model name will be **singular**

**NOTE 2:** Any foreign keys will be **modelNameId**

- example: a foreign key to an `author` model will be `authorId`

```
npx sequelize model:create --name comment --attributes author:string,content:text,favoriteId:integer
```

### Create a Sequelize Migration (empty by default)

```
npx sequelize migration:create --name migrationName
```

### Run all Sequelize migrations

```
npx sequelize db:migrate
```

### Undo latest Sequelize migration

```
npx sequelize db:migrate:undo
```

--------------------------------------------------------------------------------

## Sequelize Querying (using a `comment` model)

### Create

```javascript
const favourite = await db.favorite.create({
  author: 'Brian',
  content: 'A comment'
});
```

### Find or Create

```javascript
//returns the instance if exists, otherwise creates it

const [favourite, created] = await db.favorite.findOrCreate({
  where: {
    author: 'Brian'
  },
  defaults: {
    content: 'A comment'
  }
});
```

### Find One

```javascript
//returns only one instance; the first one that matches the where clause

const favourite = await db.favorite.findOne({
  where: {
    author: 'Brian'
  }
});

const favourite = await db.favorite.findOne();
```

### Find + Eager Load

```javascript
//returns only one instance, and loads all the comments associated with the favorite

const favourite = await db.favorite.findOne({
  where: {
    author: 'Brian'
  },
  include: [db.comment]
});
```

### Find All

```javascript
//returns all instances that match the where clause

const favourite = await db.favorite.findAll({
  where: {
    author: 'Brian'
  }
});
```

### Find By Id

```javascript
const favourite = await db.favorite.findByPk(1);
```

### Update

```javascript
const favourite = await db.favorite.update({
  name: 'Josh'
  }, {
  where: {
    author: 'Brian'
  }
});
```

### Destroy

```javascript
const favourite = await db.favorite.destroy({
  where: {
    author: 'Brian'
  }
});
```

--------------------------------------------------------------------------------

## Associations

### 1:M

Adding associations (using `author` and `post` models)

**author.js**

_Authors should have many posts_

```javascript
static associate(models) {
  models.author.hasMany(models.post);
}
```

**post.js**

_A post should belong to an author_

```javascript
static associate(models) {
  models.post.belongsTo(models.author);
}
```

### M:M

Adding associations (using `post` and `tag` models, with a join table called `postsTags`)

**post.js**

_A post should belong to many tags_

```javascript
static associate(models) {
  models.post.belongsToMany(models.tag, {through: 'postsTags'});
}
```

**tag.js**

_A tag should belong to many posts_

```javascript
static associate(models) {
  models.tag.belongsToMany(models.post, {through: 'postsTags'})
}
```

### Helper Functions (using a `post` model)

- `createPost()` - should create a post when called on a model related to post. Takes attributes as parameters
- `getPosts()` - should get posts when called on a model related to post
- `addPost(post)` - should add an existing post when called on a model related to post
- `setPost([post1, post2])` - should delete all existing associations and add the array of posts when called on a model related to post