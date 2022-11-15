# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Control Keywords

## At the end of this lesson, you should:
1. Knows what keywords are provided
2. Able to utilise the keywords

## "break"
The `break` statement stops the loop entirely

Example:
Loop over number 1-100. If the number reach 10, stop the loop
```
for (let number=1; number<=100; number++) {
  console.log('number: ', number);
  if (number === 10) {
    break;
  }
}
```


## "continue"
The `continue` statement skip the current iteration of the loop

Example:
Loop over number 1-100. Print the number if its divisible by 10;
```
for (let number=1; number<=100; number++) {
  if (number % 10) {
    continue;
  }
  console.log('number: ', number);
}
```