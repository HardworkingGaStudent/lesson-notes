# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Spread operator

## At the end of this lesson, you should:
1. Understand what a spread operator is.
2. Knows whats the use of it in arrays.

## What is a spread operator?
`...` is a spread operator. Yes. Its just 3 dots without any space in between them. It is called a `spread` operator because its spreads out the items. Eg:
```
const arr1 = [5,6,7];
const arr2 = [...arr1];
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
```

## Usage of spread operator in Arrays
1. To copy an array to another
    ```
    const arr1 = [1,2,3];
    const arr2 = [...arr1];
    console.log('arr1: ', arr1);
    console.log('arr2: ', arr2);
    console.log(' --------- ');
    arr1.push(4);
    console.log('arr1: ', arr1);
    console.log('arr2: ', arr2);
    ```
2. To combine multiple arrays
    ```
    const arr1 = [1,2,3];
    const arr2 = ['a','b','c'];
    const arr3 = [...arr1, ...arr2];
    console.log('arr1: ', arr1);
    console.log('arr2: ', arr2);
    console.log('arr3: ', arr3);
    ```
3. To easily add the array into an index
    ```
    const arr1 = [1,2,3];
    const arr2 = ['a','b',...arr1,'c'];
    console.log('arr1: ', arr1);
    console.log('arr2: ', arr2);
    ```