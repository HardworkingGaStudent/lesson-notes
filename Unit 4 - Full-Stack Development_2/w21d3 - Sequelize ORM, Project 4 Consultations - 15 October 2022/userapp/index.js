const db = require("./models");

async function init() {
  // const user = await db.user.create({
  //   firstName: 'Brian',
  //   lastName: 'Hague',
  //   age: 99,
  //   email: 'hello@gmail.com'
  // });

  // const user = await db.user.findOne({
  //   where: {firstName: 'Brian'},
  //   attributes: ['firstName']
  // });

  // const user = await db.user.findByPk(1)

  // const [user, created] = await db.user.findOrCreate({
  //   where: {
  //     firstName: 'Brian',
  //     lastName: 'Smith'
  //   },
  //   defaults: { age: 88 }
  // });

  // console.log('user:', user.get())
  // console.log('created:', created)

  const id = '1 OR 1=1'
  const users = await db.user.findAll({
    where: {id}
  });
  console.log('users: ', users)

  // const numberOfRecordsUpdated = await db.user.update({
  //   lastName: 'Taco'
  // }, {
  //   where: {
  //     firstName: 'Brian'
  //   }
  // });

  // console.log('numberOfRecordsUpdated: ', numberOfRecordsUpdated)

  // const numberOfRecordsDeleted = await db.user.destroy({
  //   where: { firstName: 'Brian' }
  // });

  // console.log('numberOfRecordsDeleted: ', numberOfRecordsDeleted)

  // const [post, created] = await db.post.findOrCreate({
  //   where: {
  //     title: 'taco',
  //     body: 'burrito',
  //     authorName: 'Brian'
  //   }
  // });

  // console.log('post: ', post.get())
  // await db.post.destroy({
  //   where: {id: post.get().id}
  // })

  // const [tag1, tagCreated] = await db.tag.findOrCreate({
  //   where: {name: "food"}
  // })

  // console.log('tag1: ', tag1.get())

  // await post.addTags(tag1)

  // ==========

  // const tag = await db.tag.findOne({
  //   where: {name: "food"}
  // });
  // const posts = await tag.getPosts();
  // console.log(" =====> These posts are tagged with " + tag.name + ":");
  // posts.forEach((post) => {
  //   console.log(" =====> Post title: " + post.title);
  // });

  process.exit();
}

init();