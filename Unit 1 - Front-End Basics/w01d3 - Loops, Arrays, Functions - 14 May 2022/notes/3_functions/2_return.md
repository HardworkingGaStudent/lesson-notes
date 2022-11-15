# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> "return" keyword

## At the end of this lesson, you should:
1. Understand what is "return"
2. Know how to use "return" effectively

## What is "return"?
`return` is a reserved keyword that is used only in functions. When there is a return, the function break and return the value.
eg:
```
function add(num1, num2) {
  return num1 + num2;
}
```
The above function will return the sum of `num1 & num2`.

## How to use "return" effectively?
The key thing about `return` is that it will stop executing the function. This allows us to code our function to make it more readable
Eg, given this function:
```
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
```
A better way to write it would be to return early so that the program do not need to run other checks. We could write it like:
```
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }

  return false;
}
```

In fact, we can make it better by changing it to:
```
function isEven(num) {
  num % 2 === 0;
}
```