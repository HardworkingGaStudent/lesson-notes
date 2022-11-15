# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Higher Order Functions

## At the end of this lesson, you should:
1. Understand what is higher order functions
2. Be able to use higher order functions

## What is `Higher Order Functions`?
Higher order functions are functions that operate on other functions either by taking them as arguments or by returning them.
eg:
```
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
```
or
```
function unless(test, then) {
  if (!test) then();
}

unless(10 % 2 == 1, function () {
  console.log(10, "is even");
});
```

## Callback functions
A callback is a function passed as an argument to another function.

```
function sum(num1, num2, cb) {
  const sum = num1 + num2;
  cb(sum);
}

sum(1,2, function(sum) {
  console.log('sum: ',sum);
})

// or

const cbFunction = function(sum) {
  console.log('sum: ', sum);
}
sum(1,2,cbFunction);
```

Callback functions allows us to execute javascript code in order.
eg: Given the following
```
function printMe() {
  console.log(' ====> print me');
}
function test() {
  console.log(' ====> test');
}
setTimeout(printMe, 2000);
test();
```

How can we change it so that it prints `test` after `print me` has been printed?

```
function printMe() {
  console.log(' ====> print me');
  test();
}
function test() {
  console.log(' ====> test');
}
setTimeout(printMe, 2000);
```

## Callback hell
Granted we can pass in callbacks to ensure code are run in order, be careful. You do not want it to be like this.

```
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```

The goal is to always keep your code as shallow as possible. Return early. Break things up to smaller piece. Etc.

**BONUS**: Fix the callback hell above to a shallow level

## Some sample higher order functions
1. .forEach
```
const points = [40,100,1,5,25,10];

function fn(currentValue, index, arr) {
  console.log('currentValue: ', currentValue);
  console.log('index: ', index);
}

points.forEach(fn)
```
2. .sort
```
const points = [40,100,1,5,25,10];
points.sort()

function asc(a, b) {
  return a-b; // ascending
}

function desc(a, b) {
  return b-a; // ascending
}

points.sort(asc)
points.sort(desc)
```