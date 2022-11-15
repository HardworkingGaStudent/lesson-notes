// 1. How do we assign a value to a variable?
// Which line(s) is/are valid?

// Ans:
// let a = 0; valid
// const b = 1; valid
// 9 = a; invalid
// b = b + 5; invalid, as b is a const (alr declared & initialized above)

// 2. How do we change the value of a variable?

// 3. How do we assign an existing variable to a new variable?


// Strings Activity 1
// Strings - Switcharoo
// Create a variable called firstVariable.
let firstVariable;
// assign it the value of a string: "Hello World"
firstVariable = "Hello World"
// change the value of this variable to a number.
firstVariable = 1
// store the value of firstVariable into a new variable called secondVariable
secondVariable = firstVariable
// change the value of secondVariable to a string.
secondVariable = "hello world~"
// What is the value of firstVariable?
console.log(firstVariable)

// Strings - Combine it
// Create a variable called yourName and set it equal to your name as a string.
// Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
yourName = "Ben"
console.log("Hello, my name is " + yourName)

// Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = 'Jelly Bean';

console.log(a < b);
console.log(c < d);
console.log('Peanut' === 'Peanut');
console.log(a < b > c);
console.log((a === a) < d);
console.log(e === 'Jelly Bean');
console.log(48 == '48');
console.log('e' !== 'Eh')

// The Farm
// Write code that will print out "mooooo" if the variable animal is equal to cow.
theFarm = (animal) => {
    if (animal === "cow") {
        console.log("mooooo")
        return
    }
    console.log("Hey! You're not a cow.")
}

theFarm("cow")

// Driver's Ed
// Write a variable that will hold a person's age.
let personAge = 16

// Write code that will print out "Here are the keys", if the age is 16 years or older.
keysAge = (age) => {
    if (age >= 16) {
        console.log("Here are the keys")
        return
    } 
}

keysAge(personAge)

// Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
keysAge = (age) => {
    if (age >= 16) {
        console.log("Here are the keys")
        return
    } 

    console.log("Sorry, you're too young.")
}

keysAge(15)

// Just Loop It
// Write code that will print out all the numbers in the range 0 - 10.
for (i=0;i<=10;i++) {
    console.log(i)
}

// Write code that will print out all the numbers in the range 500 - 50.
for (i=500;i>=50;i--) {
    console.log(i)
}

// Let's get odd
// Print out the odd numbers that are within the range of 1 - 100.
for (i=1;i<=100;i++) {
    if (i%2!==0) {
        console.log(i)
    }
}

// Adjust your code to add a message next to the odd number that says: "is an odd number".
for (i=1;i<=100;i++) {
    if (i%2!==0) {
        console.log(i+" is an odd number")
    }
}

// Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:
// I found a 5. High five!
// I found a 10. High five!
for (i=0;i<=100;i++) {
    if (i%5===0) {
        console.log("I found a",i+". High five!")
    }
}

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
for (i=0;i<=100;i++) {
    if (i%3===0) {
        console.log("I found a",i+". Three is a crowd")
        continue
    }

    if (i%5===0) {
        console.log("I found a",i+". High five!")
        continue
    }
}

// Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.
let bank_account=0
for (i=1;i<=10;i++) {
    bank_account+=i
}
console.log("bank_account has $"+bank_account+" in it")

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.
bank_account=0
for (i=1;i<=100;i++) {
    bank_account+=i*2
}
console.log("bank_account has $"+bank_account+" in it")

// Fibonacci
// Fibonacci is a classic example in coding. Its name will appear often. In its essence, it is adding numbers together in a specific sequence. Don't let the inherent 'mathyness' or fancy name scare you. You've got this!
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 8 + 5 = 13
// First just try to console.log the first 10 Fibonacci numbers

fibonacciNumber = (num) => {
    if (num<0) {
        console.log("Incorrect input")
        process.exit(1)
    }
    else if (num ===0) {
        return 0
    }
    else if ((num===1) || (num===2)) {
        return 1
    }
    else {
        return fibonacciNumber(num-1)+fibonacciNumber(num-2)
    }
}

for (i=0;i<=10;i++) {
    console.log(fibonacciNumber(i))
}

// Checkerboard
const boardSize = 8;

const board = (num) => {
    let checkerBoard=[]
    for (i=0;i<=num;i++) {
        for (j=0;j<=num;j++) {
            ((i+j)%2===0 ? checkerBoard += " " : checkerBoard += "#")
        }
        checkerBoard += "\n"
    }
    return checkerBoard
}

console.log(board(boardSize))
console.log(board(20))