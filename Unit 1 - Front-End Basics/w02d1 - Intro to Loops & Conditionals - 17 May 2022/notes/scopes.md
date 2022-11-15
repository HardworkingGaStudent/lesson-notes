## Scopes

### 1

```js
let x = 0

function printSomething() {
  let x = 10
  console.log(x) // what is the value of x?
}

printSomething()
```

### 2

```js
let x = 99

// Will the following loop run? Why?
for (let x = 0; x < 10; x++) {
  console.log(x)
}
```

### 3

```js
function setNewValue() {
  var x = 1

  if (x === 1) {
    var x = 2
  }

  console.log(x) // What will be printed here? Why?
}
```

### 4

```js
function setNewValue() {
  let x = 1

  if (x === 1) {
    let x = 2
  }

  console.log(x) // What will be printed here? Why?
}
```