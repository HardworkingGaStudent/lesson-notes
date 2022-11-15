// Q1: Map
// 1. Make a function map that take 2 arguments. Assume the 2 arguments are an array of numbers and a function (a callback)
// Make it so that when map is invoked, the callback "operate" on the array and the map function return a new array with the operated array
function map(arr, cbFn) {
    // Your code here
    return arr.map(x => cbFn(x))
  }  

// 2. Create a function called multByTwo that accepts a number as an argument & multiplies that number by two.
function multByTwo(num) {
    // Your code here
    return num*2
  }

// 3. Create a function called squareNum that accepts a number as an argument & squares that number.
function squareNum(num) {
    // Your code here
    return num**2
  }  

// 4. Use multByTwo and squareNum as callbacks when invoking operateNums.
// 5. console.log the value returned by map
const arr = [1, 2, 3, 4, 5];

const arrMultByTwo = map(arr, multByTwo);
const arrMultByTwoExpected = [2, 4, 6, 8, 10];
console.log("Q1: Map: invoke map on MultByTwo:")
console.log(JSON.stringify(arrMultByTwoExpected) === JSON.stringify(arrMultByTwo)); // Should be true

const arrSquareNum = map(arr, squareNum);
const arrSquareNumExpected = [1, 4, 9, 16, 25];
console.log("Q1: Map: invoke map on squareNums:")
console.log(JSON.stringify(arrSquareNumExpected) === JSON.stringify(arrSquareNum)); // Should be true

// Q2: Array methods with callbacks
// A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.
// But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.
// By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.
// Two arrays to work with:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
// Determine if every number is greater than or equal to 0
console.log("Q2: Array method with callbacks: Every number >= 0:")
console.log(nums.every(x => x>=0))
// determine if every word shorter than 8 characters
console.log("Q2: Array method with callbacks: Every word <= 8 chars:")
console.log(panagram.every(x => x.length < 8))

// Filter
// filter the array for numbers less than 4
console.log("Q2: Filter: array for numbers <4:")
console.log(nums.filter(x => x<4))
// filter words that have an even length
console.log("Q2: Filter: word with even length:")
console.log(panagram.filter(x => (x.length%2===0)))

// Find
// Find the first value divisible by 5
console.log("Q2: Find: first value divisible by 5:")
console.log(nums.find(x => (x%5===0)))
// find the first word that is longer than 5 characters
console.log("Q2: Find: first word >5chars:")
console.log(panagram.find(x => x.length>5) || "words in panagram are all <=5 chars")

// Find Index
// find the index of the first number that is divisible by 3
console.log("Q2: Find: index of the first number that is divisible by 3")
console.log(nums.findIndex(x => (x%3===0)))
// find the index of the first word that is less than 2 characters long
console.log("Q2: Find: index of the first word that is less than 2 characters long")
console.log(panagram.findIndex(x => (x.length<2))||"words in panagram are all >2 chars")

// For Each
// console.log each value of the nums array multiplied by 3
console.log("Q2: For Each: each value of the nums array multiplied by 3")
nums.forEach(x => console.log(x*3))

// console.log each word with an exclamation point at the end of it
console.log("Q2: For Each: each word with an exclamation point at the end of it")
panagram.forEach(x => console.log(x+"!"))
// panagram.forEach(x => console.log(`${x}!`))

// Thought Questions

// What happened to the original array?
// > original array is not modified
// Can you store the values from a forEach method in a new array?
// > yes.
console.log("Q2: Thought: store the values from a forEach method in a new array:")
const newNums=[]
nums.forEach(x => newNums.push(x))
console.log(newNums)

// Map
// make a new array of each number multiplied by 100
console.log("Q2: Map: make a new array of each number multiplied by 100:")
const newArrMult100 = []
nums.map(x => newArrMult100.push(x*100))
console.log(newArrMult100)

// make a new array of all the words in all uppercase
console.log("Q2: Map: make a new array of all the words in all uppercase:")
const newArrUpperCase = []
panagram.map(x => newArrUpperCase.push(x.toUpperCase()))
console.log(newArrUpperCase)

// Thought Questions
// What happened to the original array?
// > the original array remains unchanged

// Can you store the values from a map method in a new array?
// > yes. the map method returns a new array

// Some
// Find out if some numbers are divisible by 7
console.log("Q2: Some: find out if some numbers are divisible by 7:")
console.log(nums.some(x => (x%7===0)))

// Find out if some words have the letter a in them
console.log("Q2: Some: find out if some words have the letter a in them:")
console.log(panagram.some(x => x.includes("a")))
console.log(panagram.some(x => x.indexOf("a"))) // if false will return -1

// Hungry for More
// Reduce
// Add all the numbers in the array together using the reduce method
console.log("hungry for more - reduce + sum numbers:")
const sumNums = (numsOne, numsTwo) => {
    return numsOne+numsTwo
}
console.log(nums.reduce(sumNums))

// concatenate all the words using reduce
console.log("hungry for more - reduce + concatenate:")
const concatStrings = (strOne, strTwo) => {
    return strOne+strTwo
}
console.log(panagram.reduce(concatStrings))

// Thought Questions

// What happened to the original array?
// > nothing happened. original array remains unchanged

// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
console.log("hungry for more - sort nums alphabetically as strings:")
console.log(nums.sort()) // it sorts as if the array elements are strings (alphabetically)

// Try to sort without any arguments, do you get what you'd expect with the words array?
console.log("hungry for more - sort panagram:")
console.log(panagram.sort()) // sorts alphabetically

// seems like .sort() method first converts to string, then sorts alphabetically

// Sort the numbers in ascending order
console.log("hungry for more - sort nums in ascending order:")
console.log(nums.sort( (a,b) => a-b ))

// Sort the numbers in descending order
console.log("hungry for more - sort nums in descending order:")
console.log(nums.sort( (a,b) => b-a ))

// Sort the words in ascending order
console.log("hungry for more - sort panagram in ascending order:")
console.log(panagram.sort(
    (a,b) => a.toUpperCase() < b.toUpperCase() ? -1:1 // -1 -> a is a lower index than b. +1 -> a is a higher index than b. 0 -> both equal
))
console.log(panagram.sort((a, b) => a.toUpperCase() < b.toUpperCase() ? -1 : 1));

// Sort the words in descending order
console.log("hungry for more - sort panagram in ascending order:")
console.log(panagram.sort(
    (a,b) => a.toUpperCase() < b.toUpperCase() ? -1:1 
))
console.log(panagram.sort((a, b) => a.toUpperCase() < b.toUpperCase() ? 1 : -1));

// Thought Questions

// What happened to the original array?
// > original array is sorted, since it is modified in-place

// Q3 Working with data
const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
]

// filter for products with a price that is less than 10
console.log("Q3: Working with data: filter for products with a price that is less than 10")
console.log(products.filter(x => x.price < 10))

// sort alphabetically by product name
console.log("Q3: Working with data: sort alphabetically by product name")
console.log(products.sort((a,b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1:1))

// Q4: Finding the key of an object given its value
// Find what the key is if the value is 'Ethan'
console.log("Q4: Finding the key of an object given its value:")

const ethan = {
  name: 'Ethan',
  age: 35,
  isHappy: true
};

console.log(Object.keys(ethan).find(x => ethan[x]==='Ethan'))