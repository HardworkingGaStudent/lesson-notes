# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Objects

## At the end of this lesson, you should:
1. Know what an object is
2. How to create an object
3. How to access 1 item in an object
4. How to access all items in an object
5. How to add item into an object
6. How to remove item from an object
7. Objects vs Arrays

---

## What is an object?
Object is a data structure just like array. It is used to represent a "thing" in your code. That "thing" could be a person, a car, a building, etc. Basically anything that is made up or can be defined by a set of characteristics.

In objects, these characteristics are called **properties** that consists of a `key` and a `value`

Syntax
```js
const obj = {
  key1: 'value1',
  key2: 'value2
}
```

Things to note:
1. additional keys are separated by a comma `,`
2. The entire object key-value pairs are within the curly braces `{ }`
3. Use `const` unless you are reassigning the variable

You can also define an object in a single line:
```
const obj = { key1: 'value1', key2: 'value2' }
```

[More reading: other ways to create an object](https://www.programiz.com/javascript/examples/create-object)


Example of a "person" object:
```js
const ethan = {
  name: 'Ethan',
  age: 35,
  isHappy: true
}
```

### Object `key`

1. It is a **string**
2. It is **unique**. If you define 2 keys, the last key will be taken.
eg:
```js
const obj = {
  key1: 1,
  key1: 2
};
console.log('obj: ', obj);
```
3. The key can be > 1 word. But, you have do it like so:
```js
const obj = {
  key1: 1,
  key2: 2,
  'word word': 3
};
console.log('obj: ', obj);
```

**TAKE NOTE:** If you define the key as a `number`, the key will be a `string`.

### Object `value`
1. It can be any datatype (string, number, boolean, array or even another object)
eg:
```js
const ethanMother = {
  name: "Ethan's Mom",
  age: 60,
  workHistory: [{
    name: '',
    title: 'housewife',
    salary: 0
  }]
};

const ethan = {
  name: 'Ethan',
  age: 35,
  isHappy: true,
  workHistory: [{
    name: 'Company A',
    title: 'Associate',
    salary: 1_000
  }],
  mother: ethanMother,
  greet: function() { console.log('hello') }
};
```

## Quiz 1:
1. Given the following, what does console.log outputs?
```js
const ethanMother = {
  name: "Ethan's Mom",
  age: 60,
  workHistory: [{
    name: '',
    title: 'housewife',
    salary: 0
  }]
};

const ethanWorkHistory =[{
  name: 'Company A',
  title: 'Associate',
  salary: 1_000
}]

const ethan = {
  name: 'Ethan',
  age: 35,
  isHappy: true,
  workHistory: ethanWorkHistory,
  mother: ethanMother,
  greet: function() { console.log('hello') }
};

console.log(ethan)
```


## Getting the value of an object key

There are 2 ways to access the value in an object:

  - dot notation
  - bracket notation

Example: Given the following object:
```js
const obj = {
  key1: 'value1',
  key2: 'value2
}
```
To get `value1`, we do:
```js
obj.key1 // dot notation
obj['key1'] // bracket notation
```

### Dot notation

1. Usually used because it is way easier to read
2. The key cannot start with a number
3. Key cannot be a variable
```
OK: obj.prop_1, obj.prop$, obj.prop
NOT OK: obj.1prop, obj.word word
```

### Bracket notation

1. Key must be a string or a variable that references a string
2. The string can have spaces within
```
OK: obj['prop_1'], obj['word word'], obj[varName]
```

## Setting the value of an object key

There are 2 ways to set the value in an object:

  - dot notation
  - bracket notation

```js
obj.key1 = 'new value';
obj['key1'] = 'new value';
```

## Iterating over an object
There are a few ways:

1. `for-in`:
```js
for (let key in obj) {
  console.log('key: ', key);
  console.log('val: ', obj[key]);
}
```
2. `Object.keys(obj).forEach()`: loop over all keys
```js
Object.keys(obj).forEach((key) => {
  console.log('key: ', key);
  console.log('val: ', obj[key]);
});
```
3. `Object.values(obj).forEach()`: loop over all values
```js
Object.values(obj).forEach((val) => {
  console.log('val: ', val);
})
```
4. `Object.entries(obj)`: output a 2D array
```js
const entries = Object.entries(obj);
console.log('entries: ', entries);
```


## Removing a key from an object

```js
delete obj.key
```

Eg:
```js
const ethan = {
  name: 'Ethan',
  age: 35,
  isHappy: true,
  greet: function() { console.log('hello') }
};
console.log('ethan before: ', ethan);
delete ethan.age;
console.log('ethan after: ', ethan);
```

---

## Lab Q1 & Q2: 30 mins

---

## Object vs Arrays

1. Arrays are used to create ordered collections
2. Objects are used when we want to have a key-value pair set of data

## Extra Note on Objects

1. Key value pair of an object are stored in the order that they are added
2. if the object's key & value's variable name is the same, we just need to write once. Eg:
    ```js
    const age = 35;
    const ethan = {
      name: 'Ethan',
      age // <= here is the same as "age: age"
    }
    ```