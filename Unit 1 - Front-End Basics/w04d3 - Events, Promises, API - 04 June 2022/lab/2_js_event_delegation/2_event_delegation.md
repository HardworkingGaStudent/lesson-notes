# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Javascript Event Delegation

## At the end of this lesson, you should:
1. Understand what is JS event delegation

---

## What is JS event delegation?
`Event Delegation` is basically a `pattern` to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the `.target` property of the event object.

Let’s see an example with and without event delegation

### Example 1: N number of event listners

1. Open the file at [instructor_examples/event_delegation_1.html](./event_delegation_1.html) in your browser (drag & drop the HTML file on your browser)

Note the JS below. Doing it like this now generates 1 event listener for 1 element. This means if we have 1,000 elements, we will have 1,000 listeners

```js
const parentDiv = document.getElementById('parent-container');

for (let i = 1; i <= 10; i++) {
  const childP = document.createElement('p');
  childP.textContent = `This is line ${i}`;
  childP.addEventListener('click', function(event) {
    // Other codes
    console.log(msg);
  });

  parentDiv.appendChild(childP);
}
```

The above code then generates:
```html
<div>
  <p>This is line 1</p> <!-- click event listener here -->
  <p>This is line 2</p> <!-- click event listener here -->
  <p>This is line 3</p> <!-- click event listener here -->
  <p>This is line 4</p> <!-- click event listener here -->
  <p>This is line 5</p> <!-- click event listener here -->
  <p>This is line 6</p> <!-- click event listener here -->
  <p>This is line 7</p> <!-- click event listener here -->
  <p>This is line 8</p> <!-- click event listener here -->
  <p>This is line 9</p> <!-- click event listener here -->
  <p>This is line 10</p> <!-- click event listener here -->
</div>
```

### Example 2: Dynamic DOM issue

1. Open the file at [instructor_examples/event_delegation_2.html](./event_delegation_2.html) in your browser (drag & drop the HTML file on your browser)

Note the Javascript
```js
const pElements = document.getElementsByTagName('p');
for(let i=0,j=pElements.length; i<j; i++) {
  const element = pElements[i];
  element.addEventListener('click', function(event) {
    // Other codes
    console.log(msg);
  });
}
```
This code fetches the `<p>` and add the click event listener.
When we click on the button `Add dynamic DOM elements`, the function fires to add more `<p>`. These elements do not have any event attach to it because the code to attach the events only happen once.

The final output will be:
```html
<div>
  <p>This is line </p> <!-- click event listener here -->
  <hr>
  <p>This is line 1</p>
  <p>This is line 2</p>
  <p>This is line 3</p>
</div>
```

---

How then do we solve the above?
We use event delegation.

Please check the example html files