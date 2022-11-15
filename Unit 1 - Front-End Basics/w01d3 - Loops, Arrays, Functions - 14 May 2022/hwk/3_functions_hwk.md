# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Homework: Functions

## Q1: Display a Pyramid
Create a function that receive an argument to determine depth of the pyramid and print out:
```
#
##
###
####
#####
######
#######
```
eg:
```
function printPyramid(height) {
  // Your code here
}

printPyramid(5);
```
The above will print:
```
#
##
###
####
#####
```

## Q2: Minimum
Write a function min that takes two arguments and returns their minimum.
```
function min(num1, num2) {
  // Your code here
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```

## Q3: Bean Counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
```
function countBs(str) {
  // Your code here
}

console.log(countBs('BBC'));
// → 2

function countChar(str, char) {
  // Your code here
}
console.log(countChar('kakkerlak', 'k'));
// → 4
```

## Q4: Map
Given the following array:
```
const grid = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
```
How do you modify it so that we can do:
```
grid.map(?)
```
will return:
```
[
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
]
```
*Note: Please use the inbuilt [map function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)