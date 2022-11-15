// Q1: Display a Pyramid
// Create a function that receive an argument to determine depth of the pyramid and print it out
printPyramid = (nums) => {
    for (let i = 1; i<=nums;i++) {
        console.log("#".repeat(i))
    }
    console.log('-'.repeat(20))
}

// Q2: Minimum
// Write a function min that takes two arguments and returns their minimum.
min = (num_1, num_2) => {
    if (num_1 === num_2) {
        return num_1
    } 

    if (num_1 < num_2) {
        return num_1
    }

        return num_2

    }

// Q3: Bean Counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. 
// The returned value will be a string containing only one character (for example, "b"). 
// The first character has position 0, which causes the last one to be found at position string.length - 1. 
// In other words, a two-character string has length 2, and its characters have positions 0 and 1.
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted 
// (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

countBs = (str) => {
    // Your code here
    let numOfBs = 0
    let i=0
    const strLength = str.length
    while (i<=strLength) {
        if (str[i] === "B") {
            numOfBs += 1
        }
        i+=1
    }
    return numOfBs
}
  
countChar = (str, char) => {
    // Your code here
    let numOfChars = 0
    let i=0
    const strLength = str.length
    while (i<=strLength) {
        if (str[i] === char) {
            numOfChars += 1
        }
        i+=1
    }
    return numOfChars
}
  
// Q4: Map
// Given the following array grid=[[0, 1, 2],[3, 4, 5],[6, 7, 8],];
// How do you modify it so that we can do:
// grid.map(?) to return: grid=[[2, 3, 4],[5, 6, 7],[8, 9, 10],]
// Useful example from online:https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/#:~:text=The%20syntax%20for%20the%20map,whole%20array%20object%20to%20it.
// let arr = [2, 3, 5, 7]

// arr.map(function(element, index, array){
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     return element;
// }, 80);

// Defining main
function myMain() {
    // Code for Qn1
    console.log('Q1:')
    printPyramid(5);

    // Code for Qn2
    console.log('Q2:')
    console.log(min(0,10));
    console.log(min(0,-10));
    console.log('-'.repeat(20))

    // Code for Qn3
    console.log('Qn3:')
    console.log(countBs('BBC'));
    console.log(countChar('kakkerlak', 'k'));
    console.log('-'.repeat(20))

    // Code for Qn4
    console.log('Qn4:');
    
    const grid = [[0, 1, 2],[3, 4, 5],[6, 7, 8],];
    console.log(
        grid.map(function(element){
            element.shift()
            element.push(element[element.length-1]+1)
            element.shift()
            element.push(element[element.length-1]+1)
            return element
        })
    )
}

if (require.main === module) {
    myMain();
}