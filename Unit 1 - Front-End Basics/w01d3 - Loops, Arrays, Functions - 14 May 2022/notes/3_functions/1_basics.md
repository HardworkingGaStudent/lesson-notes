# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Functions Basics

## At the end of this lesson, you should:
1. Know what a function is
2. Know why functions exist
3. Know how to create / declare a function
4. Know how to invoke a function

---

## What is a function?
A function is a piece of code that takes an input and does something

```
isEven(2) // true
```
- Name: isEven
- arguments: 2
- output: true

It could return a value or it could print out something using `console.log`. Basically anything you want it to do.

## How do we recognize a function?
```
isEven(2)
```

- With arguments: `<name>(arguments);`
- Without arguments: `<name>();`

Basically a variable name followed by `()` indicates its a function

## Quiz 1
What function have you used before?
Yes: `console.log`

## Why do we need functions?
1. **Reduce repetition of the same code**. We do not need to write the same chunk of code over & over & over again
2. **Superpower to do something without knowing how it works**. As long as you know the input & output of the function, you don’t need to know how it’s inner workings

## How do we declare a function?
To create a function, there are 3 important parts to the syntax:
1. Name <= used to call the functino
2. (...) <= used to receive arguments
3. {...} <= block of code to represent the function's inner workings

eg: Create a function that takes in 2 numbers and return the sum of both numbers:
```
function add(num1, num2) {
  return num1 + num2;
}
```

## Quiz 2
Write a function that will receive a number as the input and will return if the number is even or not

```
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
```

## How do we invoke a function?
Given this function:
```
function add(num1, num2) {
  return num1 + num2;
}
```
to invoke it:
```
add(1,2);
// or
const total = add(1,2);
```