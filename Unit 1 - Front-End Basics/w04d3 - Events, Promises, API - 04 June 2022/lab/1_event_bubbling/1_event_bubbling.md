# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Javascript Event Bubbling

## At the end of this lesson, you should:
1. Understand what is JS event bubbling
2. Understand what is `target` & `currentTarget`
3. Know how to stop event bubbling

---

## What is JS event bubbling?
When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

### Example

1. Open the file at [instructor_examples/event_bubbling.html](./event_bubbling.html) in your browser (drag & drop the HTML file on your browser)
2. Click on `P`. What do you see?

Basically we will see 5 alerts:

```
p -> div -> form -> body -> html
```

<br>

Now, let's take a look at the code in the event_bubbling.html file. We can see the onclick is set on all 5 tags.

This happened because the `onclick` event is first run on where it was clicked (in this case, the `P`) then it bubble up to it's parent onclick event until the `<html>` tag.

<br>

> The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.

<br>

---

**IMPORTANT!**

**ALMOST** all events bubble. The key word in this phrase is “almost”.

For instance, a `focus` event does not bubble. There are other examples too, we’ll meet them. But still it’s an exception, rather than a rule, most events do bubble.

---

## target & currentTarget

A handler on a parent element can always get the details about where it actually happened.

- `event.target`: The element that caused the event. Also known as the `target element`
- `event.currentTarget` or `this`: The current element where the event handler is

<br>

### Example

1. Open the file at [instructor_examples/event_target.html](./event_target.html) in your browser (drag & drop the HTML file on your browser)
2. Click on any of the `FORM` or `DIV` or `P`. What do you see?

Let's take a look at the Javascript code.

## Stop event bubbling

Any handler may decide that the event has been fully processed and stop the bubbling.

The method for it is `event.stopPropagation()`

### Example

1. Open the file at [instructor_examples/event_bubbling_stop.html](./event_bubbling_stop.html) in your browser (drag & drop the HTML file on your browser)
2. Click on `P`. What do you see?

Based on above about event bubbling, we are supposed to see 5 alerts:

```
p -> div -> form -> body -> html
```

However, we only see 2 alerts. Why?

Lets take a look at the code.

<br>
<br>

---

**IMPORTANT!**: **Don’t stop bubbling without a need!**

Bubbling is convenient. Don’t stop it without a real need: obvious and architecturally well thought out.

Sometimes `event.stopPropagation()` creates `hidden pitfalls` that later may become problems.

For instance:

1. We create a nested menu. Each submenu handles clicks on its elements and calls stopPropagation so that the outer menu won’t trigger.
2. Later we decide to catch clicks on the whole window, to track users’ behavior (where people click). Some analytic systems do that. Usually the code uses document.addEventListener('click'…) to catch all clicks.
3. Our analytic won’t work over the area where clicks are stopped by stopPropagation. Sadly, we’ve got a “dead zone”.

There’s usually no real need to prevent the bubbling. A task that seemingly requires that may be solved by other means. One of them is to use custom events. Also we can write our data into the event object in one handler and read it in another one, so we can pass to handlers on parents information about the processing below.

---