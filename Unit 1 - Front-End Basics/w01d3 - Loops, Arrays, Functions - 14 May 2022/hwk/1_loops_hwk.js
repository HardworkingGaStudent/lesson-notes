// 1. Chessboard
// Write a program that create a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// (refer to hwk qns for the diagram)

const myChessBoard = (rows, cols) => {
    /**
     * function returns a (rows x cols) chessboard, each grid represented by a ' ' (space) or '#'
     */
    let board = []
    for (let i=0;i<rows;i++) {
        for (let j=0;j<cols;j++) {

            if ((i+j)%2==0) {
                board += " "
            } else {
                board += "#"
            }
        }
        board += "\n"
    }
    console.log(board)
}

// 2. Fizz Buzz
// Write a javascript application that logs all numbers from 1 - 100.

// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

const fizzBuzz = (nums) => {
    /**
     * fizz buzz problem. input runs from 1 to nums
     */
    for (let i=1; i<=nums; i++) {
        if (i%15===0) {
            console.log("FizzBuzz")
            continue
        } 
        
        if (i%3===0) {
            console.log("Fizz")
            continue
        } 
        
        if (i%5===0) {
            console.log("Buzz")
            continue
        }
        
        console.log(i)
        
    }
}

// Defining main
function myMain() {
    myChessBoard(8,8);
    fizzBuzz(100);
}

if (require.main === module) {
    myMain();
}