// Q1: Programming fundamentals

const f = l => {
    let es = 0, p = 0, c = 1, n = 0
    while (c <= l) {
      n = c + p;
      [c, p] = [n, c]
      es += (c % 2 === 0) ? c : 0
    }
    return es
  }
  
console.log(f(55))

const f2 = limit => {
    let evenSum = 0;
    let last = 0;
    let current = 1;
    while (current <= limit) {
        let next = current + last;
        [current, last] = [next, current]
        if (current % 2 === 0) {
            console.log("adding ",current," to the evenSum")
            evenSum += current;
      }
    }
    return evenSum;
  }
  
console.log(f2(55))

// Answer with comments:
// 1. In keeping with one of our programming principals (write code for the maintainer): 
// What would have been a more semantic name for this function (hint: this is a problem we had for either lab 
// or hw and is considered a classic ) - are there any other variable names or things that would make this 
// code easier to read and understand?

// Ans: a more semantic name would be evenFibonacciNumbersSum - it returns the sum of even fibonacci numbers, where the 
// largest fibonacci number is <= given number (the argument: limit)

// 2. If you started a new job and your project was to expand the functionality of this function by allowing a 
// second argument and then based on that second argument, returning the sum of even or odd numbers, which code 
// would you rather start working with f or f2?

// f2 would be more user-friendly as variable names are already specified and given. its more human readable and does not need refactoring 

// 3. Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! 
// Run the code, is this semi-colon necessary?

// Yes, it is required, otherwise the error will be thrown - SyntaxError: Invalid left-hand side in assignment
// this is not typically needed because JS has automatic semicolon insertion (based on following reading), but in this case, was not inserted
// on further research: https://codeburst.io/ecmascript-automatic-semicolon-insertion-50f09091e377


// Q2: Combining data types
// Model a Vending Machine Model a vending machine
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
const vendingMachine = {
    snacks: [
        {name: "peppero", price: 1.8},
        {name: "oreo", price: 1.2},
        {name: "doritos", price: 4.8}
    ],
    vend: function (index) {
        return vendingMachine['snacks'][index]
    }
    // the following works as well
    // vend: function (index) {
    //     return this.snacks[index]
    // }
}

// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

console.log(vendingMachine.vend(0))
console.log(vendingMachine.vend(1))
console.log(vendingMachine.vend(2))