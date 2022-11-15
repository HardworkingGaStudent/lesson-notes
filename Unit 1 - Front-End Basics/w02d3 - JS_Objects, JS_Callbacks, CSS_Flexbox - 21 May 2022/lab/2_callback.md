# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Labs: Callback Functions

## Q1: operateNums
1. Make a function `operateNums` that takes 2 arguments. Assume the two arguments are a number and a function (a callback).
    - Make it so that when `operateNums` is invoked, the callback "operates" on the number.
    - Once the number has been operated on, console.log the operated number
3. Create a function called `multByTwo` that accepts a number as an argument and multiplies that number by two.
4. Create a function called `squareNum` that accepts a number as an argument and squares that number.
5. Use `multByTwo` and `squareNum` as callbacks when invoking `operateNums`.

## Q2: isPanagram
1. Make a function `isPanagram` that takes 2 arguments. Assume the 2 arguments are an array of string and a function (a callback)
    - make it so that when `isPanagram` is invoked, the callback "operates" on the string

Given the following array, use `isPanagram` to check whether each letter (a-z) - case insensitive - is used at least once
```js
function isPanagram(arr, cbFn) {
  // Your code here
}

function cbFn(str) {
  // Your code here
}

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

console.log(isPanagram(panagram, cbFn) === true); // Should be true
```