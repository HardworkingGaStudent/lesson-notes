# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Types Of Functions

## At the end of this lesson, you should:
1. Know the 3 basic types of functions
2. Understand how they differ
3. Hoisting

## Type 1: function declaration
This is written as such:
```
function abc() {}
```
eg:
```
function add(num1, num2) {
  return num1 + num2;
}
```

## Type 2: function expression
This is written as such:
```
const abc = function() {}
```
eg:
```
const add = function(num1, num2) {
  return num1 + num2;
}
```

## Type 3: arrow function
This is written as such:
```
const abc = () => {}
```
eg:
```
const add = (num1, num2) => {
  return num1 + num2;
}
```

## Hoisting
Javascript hoisting refers to the process whereby the the declarations of functions, variables & classes are moved to the top of the scope before the execution of scope.

Javascript only hoists declarations. Not initialisations.

### Hoisting of variables
1. `var`
```
console.log('num: ', num); // num: undefined
var num; // declaration
num = 6; // initialization;
console.log('num after: ', num);
```
This happens because by default, variables declared by `var` is initialized to `undefined` by default

2. `let` & `const`
```
console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Declaration & Initialization
```
This happens because the variable is not initialised yet.

### Hoisting of functions
eg:
```
add(1,2);

function add(num1, num2) {
  return num1 + num2;
}
```
note:
1. Hoisting for functions only work for `function declaration`. The other types are assumed as variables thus will behave as `hoisting of variables`
2. Whats the benefit of this? This allows us to write code that call the function above the function declaration.