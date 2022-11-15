// Functions
// function to create red/black board
function generateSquares(size) {
    let output = [];

    for (i=0;i<size; i++) {
        let row = document.createElement("div")
        row.setAttribute("class","row")

        for (j=0;j<size;j++) { 
            let sqElement = document.createElement("div")
            let classes = "square "

            if (j%2 === 0) {
                classes += "even"
            } else {
                classes += "odd"
            }

            sqElement.setAttribute("class", classes)
            row.appendChild(sqElement)
        }

        output.push(row)
    }
    return output
}

// function to create checkered board
function generateCheckeredSquares (size) {
    let rows = [];

    for (i=0; i<size; i++) {
        // create rows
        row = document.createElement("div")
        row.setAttribute("class","row")

        // determine colour pattern based on odd/even row
        let pattern = [];
        if (i%2===0) {
            pattern = ["black","red"]
        } else {
            pattern = ["red","black"]
        }

        for (j=0; j<size; j++) {
            let sqElement = document.createElement("div")
            sqElement.setAttribute("class","square")

            let colOddEven = (j%2)
            sqElement.style.background = pattern[colOddEven]

            row.appendChild(sqElement)
        }
        rows.push(row)
    }
    return rows
}

// function to create pyramids
function generatePyramids (size) {
    let output = [];
    for (i=0; i<size; i++) {
        // create a div for each row
        let row = document.createElement("div")
        row.setAttribute("class","row")
        // create number of triangles
        let numOfTriangles = i+1

        for (j=0;j<numOfTriangles;j++) {
            // create a triangle element and append it to the row
            let triangleElement = document.createElement("div")
            triangleElement.setAttribute("class","tri")
            row.appendChild(triangleElement)
        }
        output.push(row)
    }
    return output
}

// Driver code
// driver code for black/red board
let parentElement = document.querySelector(".wrapper")
let squareDivs = generateSquares(8);
// console.log(squareDivs)

squareDivs.forEach(item => {
    parentElement.appendChild(item)
})

// driver code for checkered board
parentElement = document.querySelector(".wrapper-checkered")
let checkeredSquareDivs = generateCheckeredSquares(8)

checkeredSquareDivs.forEach(item => {
    parentElement.appendChild(item)
})

// driver code for pyramid
parentElement = document.querySelector(".wrapper-pyramid")
let triangleDivs = generatePyramids(8)

triangleDivs.forEach(item => {
    parentElement.appendChild(item)
})