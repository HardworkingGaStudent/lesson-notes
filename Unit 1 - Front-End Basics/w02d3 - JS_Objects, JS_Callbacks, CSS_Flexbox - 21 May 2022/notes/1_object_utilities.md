# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Object Utilities

## At the end of this lesson, you should:
1. Know how to destructure an object
2. Know how to use spread operator on an object

## Destructuring
Destructuring of an object is a way to get the value from an object and create a variable.

Example:
```js
const ethan = {
  name: 'Ethan',
  age: 35,
  isHappy: true,
  workHistory: [{
    name: 'Company A',
    title: 'Associate',
    salary: 1_000
  }],
  greet: function() { console.log('hello') }
};

const { name, age } = ethan;

console.log('name: ', name);
console.log('age: ', age);
```
Given the above, we can

1. rename the variable
    ```js
    const ethan = {
      name: 'Ethan',
      age: 35,
      isHappy: true,
      workHistory: [{
        name: 'Company A',
        title: 'Associate',
        salary: 1_000
      }],
      greet: function() { console.log('hello') }
    };

    const { name: ethanName } = ethan;
    console.log('ethanName: ', ethanName);
    ```
2. set a default value if the value is undefined
    ```js
    const ethan = {
      name: 'Ethan',
      age: 35,
      isHappy: true,
      workHistory: [{
        name: 'Company A',
        title: 'Associate',
        salary: 1_000
      }],
      greet: function() { console.log('hello') }
    };

    const { xx = 'this is a default value' } = ethan;
    console.log('xx: ', xx);
    ```
3. We can combine (1) & (2) above
    ```js
    const ethan = {
      age: 35,
      isHappy: true,
      workHistory: [{
        name: 'Company A',
        title: 'Associate',
        salary: 1_000
      }],
      greet: function() { console.log('hello') }
    };

    const { name: ethanName = 'this is a default value' } = ethan;
    console.log('ethanName: ', ethanName);
    ```

When would we want to use the above case?

This is usually very helpful especially when the obj is a variable that you do not know what the structure is going to be like

## Spread operator (...)
This is the same as spread operator in arrays.
example:
```js
const obj = {
  name: 'obj',
  age: 30
};
const newObj = { ...obj };
console.log('obj: ', obj);
console.log('newObj: ', newObj);
```

Reminder: Object is pass by reference like arrays. This mean that spread operator will spread out the first level only as well