// Labs: Callback Functions
// Q1: operateNums
// Make a function operateNums that takes 2 arguments. Assume the two arguments are a number and a function (a callback).
// Make it so that when operateNums is invoked, the callback "operates" on the number.
// Once the number has been operated on, console.log the operated number

const operateNums = (nums,func) => {
    return func(nums)
}

// Create a function called multByTwo that accepts a number as an argument and multiplies that number by two.
// Create a function called squareNum that accepts a number as an argument and squares that number.
// Use multByTwo and squareNum as callbacks when invoking operateNums.

const multByTwo = (nums) => {
    return nums*2
}

const squareNum = (nums) => {
    return nums**2
}

console.log(operateNums(555, multByTwo))
console.log(operateNums(666,squareNum))

// Q2: isPanagram
// Make a function isPanagram that takes 2 arguments. Assume the 2 arguments are an array of string and a function (a callback)
// make it so that when isPanagram is invoked, the callback "operates" on the string
// Given the following array, use isPanagram to check whether each letter (a-z) - case insensitive - is used at least once
function isPanagram(arr, cbFn) {
    // Your code here
    arrLen = arr.length
    let combinedString = String()
    for (let i=0; i<arrLen; i++) {
        combinedString+=arr[i].toUpperCase()
    }
    
    return cbFn(combinedString)
}

function cbFn(str) {
    // Your code here
    let alphabets = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'] // or: let alphas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const alphabetsLen = alphabets.length

    for (i=0; i<alphabetsLen;i++) {
        if (str.indexOf(alphabets[i])<0) {
            return false
        }
    }
    return true
}
  
const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// console.log(isPanagram(panagram,cbFn))
console.log(isPanagram(panagram, cbFn) === true); // Should be true