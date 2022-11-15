const express = require("express");
const app = express();
const port = 3000;

const validOperations = {
  add: "add",
  sub: "sub",
  mul: "mul",
  div: "div",
};

app.get("/calcquery/:num1/:num2", (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const operation = req.query.operation;

  // validate is num
  if (isNaN(num1) || isNaN(num2)) {
    res.send("values must be numeric");
    return;
  }

  // validate operation query param exists
  if (!operation) {
    res.send("operation query param is required");
    return;
  }

  // validate operation is acceptable
  if (!validOperations[operation]) {
    res.send("operation value is invalid");
    return;
  }

  let result = null;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "mul":
      result = num1 * num2;
      break;
    default:
      // division
      if (num2 === 0) {
        res.send("num2 cannot be 0 when doing division");
        return;
      }
      result = num1 / num2;
  }

  res.send(`Result is ${result}`);
});

// app listen
app.listen(port, (req, res) => {
  console.log(`app is running on port: ${port}`);
});
