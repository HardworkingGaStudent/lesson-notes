// helper.js is answering Part 1 from first_contact.md
// code begins after "---" (line 21)
// to get all sphere sightings after May 2015, execute:
// node helper.js "shape=Sphere&date>5/1/15" > test.log
// input handling for capital letters and date formats like 05/01/2015 vs 5/1/15 is not enabled (assuming this is a MVP)

// Part 1
// const sightingsData = require("./sightings.json")
// const state = process.argv[2]
// const stateVal = state.split("=")[state.split("=").length-1]

// const filterSightingsData = sightingsData.filter((ufo) => {
//     return ufo.state === stateVal
// })

// console.log(filterSightingsData)

// --------------------------------------------------------------

// take cli input and define variables
const sightingsData = require("./sightings.json");
let filteredDataDateTime = null;
const cliArgs = process.argv[2];
const inputArgs = cliArgs.split("&");
const parseArgs = Array();

const inputCategories = [
  "date",
  "city",
  "state",
  "shape",
  "duration",
  "description",
];
const operators = ["=", "<", ">"];

// parse args
inputArgs.map((item) => {
  for (i = 0; i < operators.length; i++) {
    if (item.includes(operators[i])) {
      parseArgs.push([operators[i]]);
      break;
    }
  }
});

for (let i = 0; i < inputArgs.length; i++) {
  let cat,
    comp = parseArgs[i][0],
    val;
  [cat, val] = inputArgs[i].split(comp);
  if (inputCategories.includes(cat)) {
    parseArgs[i] = [cat, comp, val];
  } else {
    console.log(`Invalid input: ${cat}${comp}${val}`);
    process.exit(1);
  }
}

// filtering helper functions (chronologically, code continues on line 96)
function filterByData(category, operator, value) {
  let recentSightings = sightingsData.filter((ufo) => {
    return ufo[category] === value;
  });
  return recentSightings;
}

function filterByDateObject(category, operator, value) {
  const givenDateTime = new Date(value);
  if (category === "date") {
    switch (operator) {
      case "=":
        filteredDataDateTime = sightingsData.filter((ufo) => {
          const ufoDate = new Date(ufo.date);
          return ufoDate.toDateString() === givenDateTime.toDateString();
        });
        return filteredDataDateTime;
      case ">":
        givenDateTime.setDate(givenDateTime.getDate() + 1);
        filteredDataDateTime = sightingsData.filter((ufo) => {
          const ufoDate = new Date(ufo.date);
          return ufoDate.getTime() > givenDateTime.getTime();
        });
        return filteredDataDateTime;
      case "<":
        filteredDataDateTime = sightingsData.filter((ufo) => {
          const ufoDate = new Date(ufo.date);
          return ufoDate.getTime() < givenDateTime.getTime();
        });
        return filteredDataDateTime;
    }
  }
}

// iterate and filter
for (let i = 0; i < parseArgs.length; i++) {
  // reassign this thing parseArgs[i]
  if (parseArgs[i][0] === "date" || parseArgs[i][0] === "duration") {
    parseArgs[i] = filterByDateObject(
      parseArgs[i][0],
      parseArgs[i][1],
      parseArgs[i][2]
    );
  } else {
    parseArgs[i] = filterByData(
      parseArgs[i][0],
      parseArgs[i][1],
      parseArgs[i][2]
    );
  }
}

// stringify all items inside the nested list before executing reducer function on it
parseArgs.forEach((nestedList) => {
  nestedList.map((item) => {
    JSON.stringify(item);
  });
});

// reducer function to find the intersection of all nested lists
const result = parseArgs.reduce((accumulator, curr_arr) => {
  const res = accumulator.filter((item) => {
    return curr_arr.includes(item);
  });
  return res;
});

console.log(result)
