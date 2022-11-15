// define variables
const express = require("express");
const app = express();
const port = 3000;
const sightingsData = require("./sightings.json");

// default engine
app.set("view engine", "ejs");

// app route - root
app.get("/", (request, response) => {
  // response.send("hello world");
  response.render("index", { text: "Hello World" });
});

// app route - sightings (state, city, date, shape)
app.get("/sightings", (request, response) => {
  // define variables to use
  const sightings = Array();
  const sightingsQuery = Object.assign({}, request.query); //deep copy
  let recentSightings = null;

  // iterate through sightingsQuery
  Object.keys(sightingsQuery).forEach((key) => {
    switch (key) {
      // date needs date object handling
      case "date":
        const givenDateTime = new Date(sightingsQuery[key]);
        recentSightings = sightingsData.filter((ufo) => {
          const ufoDateTime = new Date(ufo[key]);
          return givenDateTime.toDateString() === ufoDateTime.toDateString();
        });
        sightings.push(recentSightings);
        return;

      // 3 keys: state, city, shape. each key expect only one value
      default:
        recentSightings = sightingsData.filter((ufo) => {
          return ufo[key] === sightingsQuery[key];
        });
        sightings.push(recentSightings);
    }
  });

  // stringify all the items inside sightings (to execute reducer)
  sightings.forEach((nestedList) => {
    nestedList.map((item) => {
      JSON.stringify(item);
    });
  });

  // reducer function
  const intersectSightings = sightings.reduce((accumulator, current) => {
    const result = accumulator.filter((item) => {
      return current.includes(item);
    });
    return result;
  });

  // console.log(intersectSightings)

  // format variables for output rendering
  const aggregateQuery = JSON.stringify(sightingsQuery);
  const aggregateSightings = JSON.stringify(intersectSightings);
  // console.log(aggregateSightings)

  // output to response
  response.render("index", { query: aggregateQuery, text: aggregateSightings });
  // response.send(aggregateSightings);
});

// app listen
app.listen(port, (request, response) => {
  console.log(`app is running on port: ${port}`);
});
