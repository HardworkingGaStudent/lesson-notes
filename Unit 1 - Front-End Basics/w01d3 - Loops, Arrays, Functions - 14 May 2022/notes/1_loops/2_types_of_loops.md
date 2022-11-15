# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Types Of Loops

## At the end of this lesson, you should:
1. Understand what are loops
2. Able to utilise the 3 basic loops

## What is "loop"?
A loop is a piece of code that will continually run until it hits its stop condition (yes. If there is no stop condition, it will run forever)

## "while loop"
The syntax is the following:
```
while(stopCondition) {
  // your code here
}
```

Note: that `stopCondition` must be an expression that returns a boolean value.

It is called a while because if you read the syntax above in English, it will be:

> while stopCondition is not true, I will do whatever "your code here" is

`In other words, whatever your code is will run until the stopCondition is true`

Example:
Print out to console the number 0 until 100
```
let number = 0;
while (number <= 100) {
  console.log('number: ', number);
  number++;
}
```

## "do-while loop"
The syntax is the following:
```
do {
  // your code here
}
while(stopCondition)
```

Note that `stopCondition` must be an expression that returns a boolean value.

It is called a do-while because if you read the syntax above in English, it will be:

> do "your code here" and repeat it while stopCondition is not true

`In other words, whatever your code is will run once then be repeated until the stopCondition is true`

Example:
Prompt the user for their name once only. Prompt him/her again and again until an answer is provided
```
let yourName = '';
do {
  yourName = prompt('Who are you?');
} while (!yourName);
```

## "for loop"
The syntax is the following:
```
for(startCondition; stopCondition; incrementCondition) {
  // your code here
}
```

Note that `stopCondition` must be an expression that returns a boolean value.

It is called a for loop because if you read the syntax in English, it will be:

> for as long as the stopCondition is not true given the startCondition and the incrementCondition, I will run "your code here"

Example:
Print out to console the number 0 until 100
```
for(let number = 0; number <= 100; number++){
  console.log('number: ', number);
}
```