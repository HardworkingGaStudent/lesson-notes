# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Homework: Objects

## Q1: Programming fundamentals

This is to revise the fundamentals that we have learnt over the past few days.

### Common programming principles
As you are starting out, there may be things you are really worried about and other big gotchas that you aren't yet aware that are gotchas!

Read this article on [programming principles](http://www.artima.com/weblogs/viewpost.jsp?thread=331531), focus on the following nine:

1. **DRY**
2. **KISS**
3. **Avoid creating a YAGNI**
4. **Do the simplest thing that could possibly work**
5. **Don't make me think**
6. **Write code for the maintainer**
7. **Single responsibility principle**
8. **Avoid premature optimization**
9. **Separation of concerns**

Given:
```js
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
```

At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

```js
const f2 = limit => {
  let evenSum = 0;
  let last = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + last;
    [current, last] = [next, current]
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}

console.log(f2(55))
```

**Answer with comments:**

1. In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a _classic_ ) - are there any other variable names or things that would make this code easier to read and understand?

2. If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with `f` or `f2`?


3. Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

## Q2: Combining data types

**Model a Vending Machine**
Model a vending machine

- a vending machine is an object
- it has an array of snacks (make 3 snacks)
- snacks are objects that have a name and a price
- a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
- Be able to call vendingMachine.vend() with a valid integer to return a snack