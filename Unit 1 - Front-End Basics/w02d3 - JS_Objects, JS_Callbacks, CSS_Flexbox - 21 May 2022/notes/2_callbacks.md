# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Function: Callbacks

## At the end of this lesson, you should:
1. What is `callback functions`?
2. Why do we need `callback functions`
4. Define and understand the various different callback methods that can be used on an array

---

## What is `callback functions`?
A callback is a function that is to be executed after another function has finished executing

## Why do we need `callback functions`?
Javascript is an event driven language. This means that instead of waiting for a response before moving on, javascript will keep executing while listening for other events.

Lets understand more by looking at the following examples:

```js
function first(){
  console.log('first');
}
function second(){
  console.log('second');
}

first();
second();
```
As you would expect, the function `first` is executed first then `second` is executed second - logging the following:
```js
first
second
```

However, what if function `first` contains some sort of code that can't be executed immediately due to whatever reason? To simulate this, we will be using `setTimeout` which is a Javscript function that calls a function after a set amount of time.

```js
function first() {
  setTimeout(() => {
    console.log('first');
  }, 500)
}
function second(){
  console.log('second');
}
```
It is not important that you understand how `setTimeout` works now. All that matters is that we have moved `console.log('first');` inside our 500 millisecond delay. What happens when we do:
```js
first();
second();
```
The output would be:
```js
second
first
```

This happens because Javascript didn't wait for `first` to finish running before moving on to execute `second`. This is to illustrate that doing like the above won't execute them from top to bottom.

**Callback functions are a way to make sure our code runs in order**

To modify the above code so it runs in order:
```js
function first(cbFn) {
  setTimeout(() => {
    console.log('first');
    cbFn();
  }, 500)
}
function second(){
  console.log('second');
}

first(second);
```

## A real world example
Given that there is an image at `https://wwww.random-url.com/pic.jpg` and we would like to create a function that download the image and then process the image after it is download.

```js
function download(url, cbFn) {
  console.log(`Downloading ${url} ...`);

  // To simulate we need 1,000 milliseconds to download the image
  setTimeout(() => {
    cbFn(url);
  }, 1_000);
}

function processDownload(url) {
  console.log(`Processing ${url}`);
}
const imageUrl = 'https://wwww.random-url.com/pic.jpg';

download(imageUrl, processDownload);
```

Let's expand on the above example. Given our download function above, we would like to be able to process if the image fail to download or if the image download successfully

```js
function download(url, success, failure) {
  console.log(`Downloading ${url} ...`);

  // To simulate we need 1,000 milliseconds to download the image
  setTimeout(() => {
    // assume its failed:
    failure(url)
  }, 1_000);
}

function downloadFailed(url) {
  console.log(`Failed to download ${url}`);
}
function downloadSuccess(url) {
  console.log(`Successfully download ${url}`);
}
const imageUrl = 'https://wwww.random-url.com/pic.jpg';

download(imageUrl, downloadSuccess, downloadFailed);
```

How about another scenario:
Given we have 3 images, we would want to download all 3 images one after the other (download the next one only after the previous one has download successfully):

- https://wwww.random-url.com/pic1.jpg
- https://wwww.random-url.com/pic2.jpg
- https://wwww.random-url.com/pic3.jpg

```js
function download(url, success) {
  console.log(`Downloading ${url} ...`);

  // To simulate we need 1,000 milliseconds to download the image
  setTimeout(() => {
    // assume its success:
    success(url)
  }, 2_000);
}

const imageUrl1 = 'https://wwww.random-url.com/pic1.jpg';
const imageUrl2 = 'https://wwww.random-url.com/pic2.jpg';
const imageUrl3 = 'https://wwww.random-url.com/pic3.jpg';

download(imageUrl1, (url) => {
  console.log(`Successfully downloaded ${url}`);
  download(imageUrl2, (url) => {
    console.log(`Successfully downloaded ${url}`);
    download(imageUrl3, (url) => {
      console.log(`Successfully downloaded ${url}`);
    })
  })
});
```

Be careful of the above. The deeper you go, you'll end up in [callback hell](http://callbackhell.com/). Avoid that at all cost. Find a way to keep your code shallow

---

## Lab Q1 & Q2

---

## Array methods with callbacks

### What is this?
An array method that accepts a callback executes a function on the index of the given array and returns some output.

Example:
```js
const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'];
```
What if I want to go over each item in this array and add the word Ice Cream to these items?

... How would you solve this?

Lucky for us we have the .map method.

```js
const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'];

const updatedIceCreams = iceCreams.map((flavor)=>{
  return `${flavor} Ice Cream`;
});

console.log('updatedIceCreams: ', updatedIceCreams);
```

What is happening here?

map calls a provided callback function once for each element in an array, in order, and constructs a new array from the return values.

**Food for thought: Does the map method mutate the original array?**

**Let's try again!**
Use the `map` method with the following array to multiply each item by 2 and log the new array.
```js
const orinalArray = [2,4,6,8,10];

const newNumArray = orinalArray.map((num) => {
  return num * 2;
});

console.log('newNumArray: ', newNumArray);
```