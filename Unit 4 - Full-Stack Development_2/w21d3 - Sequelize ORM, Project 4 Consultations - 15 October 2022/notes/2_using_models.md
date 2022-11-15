# Using your Models inside an app

Just like using express, body-parser, and the other modules, your models must be required
in order to access them in your app.

```js
const db = require("./models");
```

## CRUD with Sequelize (Using our User model)

### Create

```js
  // you can now access the newly created user via the variable data
const user = await db.user.create({
  firstName: 'Brian',
  lastName: 'Hague',
  age: 99
});
```

### Read One

```js
// user will be an instance of User and stores the content of the table entry with id 2. if such an entry is not defined you will get null
const user = await db.user.findOne({
  where: {id: 2}
});

// findByPk: find by Primary Key
const user = await db.user.findByPk(2)
```

### Find or Create

The method findOrCreate can be used to check if a certain element is already existing in the database. If that is the case the method will result in a respective instance. If the element does not yet exist, it will be created with the provided attributes (a combination of `where` and `defaults`)

```js
const [user, created] = await db.user.findOrCreate({
  where: {
    firstName: 'Brian',
    lastName: 'Smith'
  },
  defaults: { age: 88 }
});

console.log('user: ', user.get()); // .get() is to get the object
console.log('created: ', created); // boolean value to indicate if data was created or not
```

### Find All

findAll returns more than one instance, which is useful if you need more than one record. findOne only returns one record.

```js
// users will be an array of all User instances
const users = await db.user.findAll();
```

### Update

```js
const userIds = await db.user.update({
  lastName: 'Taco'
}, {
  where: {
    firstName: 'Brian'
  }
});
```

### Delete (destroy)

```js
const userId = await db.user.destroy({
  where: { firstName: 'Brian' }
});
```