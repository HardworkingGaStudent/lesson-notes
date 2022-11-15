#Sequelize - Many to Many

##Objectives

* Create a join table and utilize it in a many-to-many relationship
* Use Sequelize's helper methods to add relationships between two different models.

If we wanted to expand our models to include a many to many relationship, we can use a many to many relationship via a join table. We will be expanding our data model to include posts and tags.

**Very Important** Name - your models `singular`

```
npx sequelize model:create --name post --attributes title:string,body:string,authorName:string
npx sequelize model:create --name tag --attributes name:string
npx sequelize model:create --name postsTags --attributes postId:integer,tagId:integer
```

##Update your Associations

In order to associate posts to tags in a many to many fashion, you will need to update the associations on the posts and tags.

###post.js

```js
static associate(models) {
  models.post.belongsToMany(models.tag, {through: "postsTags"})
}
```

###tags.js

```js
static associate(models) {
  models.tag.belongsToMany(models.post, {through: "postsTags"})
}
```

##Examples

###Create a post

```js
const [post, created] = await db.post.findOrCreate({
  where: {
    title: "taco",
    body: "burrito",
    authorName: "Brian"
  }
});
console.log('post: ', post.get())
```

###Add a unique tag to a Post.

In order to add a unique tag to a post, we must first try to find or create a tag, in order to make sure it is in fact unique.

Secondly, we must attach a post to the tags, using some built in helpers.

Some ORM has capabilities to do a bulk create on an object associations, but that kind of logic is not built in Sequelize.

```js
const [post, postCreated] = await db.post.findOrCreate({
  where: {
    title: "taco",
    body: "burrito",
    authorName: "Brian"
  }
});
const [tag, tagCreated] = await db.tag.findOrCreate({
  where: {name: "food"}
})

await post.addTag(tag)

console.log('tag: ', tag.get());
```

### Get all posts that use a tag

Sequelize generates helper functions that allow you to get related items. For instance, if you wanted to find all posts that used a given tag:

```js
const tag = await db.tag.findOne({
  where: {name: "food"}
});
const posts = tag.getPosts();
console.log("These posts are tagged with " + tag.name + ":");
posts.forEach((post) => {
  console.log("Post title: " + post.title);
});
```