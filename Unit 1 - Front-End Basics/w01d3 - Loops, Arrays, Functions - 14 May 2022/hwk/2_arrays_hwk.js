// Q1: Given the following array, create another array which is the reverse of it.

const reverseArray = () => {
    // result should be: ['e','d','c','b','a']
    const arr = ['a','b','c','d','e'];
    let arrLength = arr.length-1
    let newArr = []

    for (i=arrLength; i>=0; i--) {
        newArr.push(arr[i])
    }

    // edit (17 may 2022): did not overwrite the initial array, but created a new one
    // while (left_pointer < right_pointer) {
    //     tmp_val = arr[left_pointer]
    //     arr[left_pointer] = arr[right_pointer]
    //     arr[right_pointer] = tmp_val

    //     left_pointer += 1
    //     right_pointer -= 1

    // }
    console.log("Q1: Reverse array result: " )
    console.log(arr)
}

// Q2: Create an array with all lowercase alphabet in alphabetical order
const lowerCaseAlphabets = () => {
    // String.fromCharCode(int) is the same as chr(int) in python
    // 'alphabet'.charCodeAt() is the same as ord(alphabet) in python
    const res = []
    for (let i='a'.charCodeAt();i<='z'.charCodeAt();i++) {
        res.push(String.fromCharCode(i))
    }
    console.log("Q2: lowerCaseAlphabets output: ")
    console.log(res)
    return res
}

// Q3: Create an array with all uppercase alphabet in alphabetical order
const upperCaseAlphabets = () => {
    // String.fromCharCode(int) is the same as chr(int) in python
    // 'alphabet'.charCodeAt() is the same as ord(alphabet) in python
    const res = []
    const unicodeForA='A'.charCodeAt()
    const unicodeForZ='Z'.charCodeAt()
    for (let i=unicodeForA;i<=unicodeForZ;i++) {
        res.push(String.fromCharCode(i))
    }
    console.log("Q3: upperCaseAlphabets output: ")
    console.log(res)
    return res
}

// Q4: Create an array with both uppercase & lowercase alphabet in alphabetical order in the following way
// Result:
// ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const printAlphabets = () => {
    /**
     * function retrieves alphabets uppercase(A-Z) from the function upperCaseAlphabets(), and alphabets lowercase(a-z) 
     * from the function lowerCaseAlphabets() and prints the concatenated output
     */
    const lower_arr = lowerCaseAlphabets();    
    const upper_arr = upperCaseAlphabets();
    console.log("Q4: ")
    console.log(upper_arr.concat(lower_arr))
}

// Q5: Multi-dimensional arrays 1
// Given the following array confectionaries, how would you access kitkat bar 3?
const questionFive = () => {
    const confectioneries = [
        ["Pecan Snickers", "Dude, Sweet Chocolate Salami"],
        [
          "Lindt truffles",
          "Easter egg",
          ["kitkat bar 1", "kitkat bar 2", "kitkat bar 3", "kitkat bar 4"],
        ],
      ];
      console.log("Q5: confectioneries[1][2][2]: ", confectioneries[1][2][2])    
}

// Q5: Multi-dimensional arrays 2
// Given the following array grid, modify it so that it will be: [[2, 3, 4],[5, 6, 7],[8, 9, 10],];

const questionSix = () => {
    const grid = [[0, 1, 2],[3, 4, 5],[6, 7, 8],];
    const gridLength=grid.length

    for (i=0; i<gridLength;i++) {
        for (j=0; j<2; j++) {
            grid[i].shift()
            grid[i].push(grid[i][grid[i].length-1]+1)
        }
    }
    console.log("Q6: ")
    console.log(grid)
}



// Main
function myMain() {
    reverseArray();
    lowerCaseAlphabets();
    upperCaseAlphabets();
    printAlphabets();
    questionFive();
    questionSix();
}

if (require.main === module) {
    myMain();
}
