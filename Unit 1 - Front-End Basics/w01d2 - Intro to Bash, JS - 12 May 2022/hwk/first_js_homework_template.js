// Section 1

// Qns
// What is the difference between const and let and var? 
// Please limit your answer to no more than three short sentences
// Don't be afraid to research using google and other resources

// Answer 1 - from https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/#:~:text=The%20scope%20of%20a%20var,re%2Ddeclared%20into%20the%20scope.
// 1. let and const are block scoped, while var declarations are globally/functionally scoped
// 2. var can be re-declared, and updated. let can be updated but not re-declared. 
//    const cannot be re-declared nor updated
// 3. var and let can be declared without initializing, but const cannot be declared without initialization
// 4. var can be accessed without initialization as default val is "undefined". let and cost cannot be accessed as it cannot be declared without initializng

// Section 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a !== b)
console.log(c > d)
console.log('Name' === 'Name')
console.log(a < b < c)
console.log(a == a != d)
console.log(e !=='Kevin')
console.log(48 !== '48')
console.log(f !== e)
let g=10
console.log(g)
g = b+c
console.log(g)

// Answer
// 1. Did you use const, let or var? Why did you choose the one you chose?
// use let or var (in line 32) because g need to be updated (line 34). const does not allow this updating

// 2. What happens if you don't use const , let or var? Do you get an error? If so what does it say?
// using let or var has no error. using const shows the following error: TypeError: Assignment to constant variable.

// 3. what happens if you write 10 = g?
// following err msg, as 10 cannot be used as a varaiable
// let 10 = g
//     ^^
// error message is - SyntaxError: Unexpected number 

// Bonus Challenge (optional):
console.log(
    a < (b || f) === !f && d < c 
    )