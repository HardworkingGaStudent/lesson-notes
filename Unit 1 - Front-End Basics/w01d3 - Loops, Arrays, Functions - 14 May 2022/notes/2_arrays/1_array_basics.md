# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Array Basics

## At the end of this lesson, you should:
1. Know what an array is
2. How to create an array
3. How to access 1 value in an array
4. How to access all values in an array

---

## What is an array?
Array is a data structure that holds a collection of elements (values / variables) that is identifiable by an index.

An array index number start from 0. Therefore, the last element of the array is the length of the array - 1.

<img src="./img/array-illustration.gif">

**What is a data structure?**

A data structure is the technical term for how we organise, manage & store data to enable efficient access & modification.

## How to create an array?
There are a few ways to create an array in Javascript. The most commonly used way is:
```
const arr1 = []; // empty array
const arr2 = ['a','b','c','d','e']; // an array with default values
```

In javascript, we **do not need** to give a size to the array. The size is dynamic and determined automatically. It is not the case for certain languages like C, C++ where you need to preset the size of the array.

However, we could create an array with a predetermined size if we want to:
```
const size = 10;
const arr = Array(size);
conosle.log('arr: ', arr);
```

## How to access 1 value in an array?
Given we know that an array has indices, we access the values in the array by their indices.
```
const arr = ['a','b','c','d','e'];
// Get 'c' from the array
console.log('data:', arr[2]);
```

## How to access all values in an array?
Now we know that we can grab the data in an array using the index, there will come the time that we want to grab 1 or more data from an array. How do we do that?

Yes. By using loops. We can use the 3 basic loops to accomplish this. However, the most commonly used one is the for loop:
```
const arr = ['a','b','c','d','e'];
for(let i=0; i<arr.length; i++) {
  console.log('data: ', arr[i]);
}
```

Note:
Doing the for loop like the above is extremely inefficient as each iteration, `arr.length` is being executed to calculate the length of the array. This means if the loop will run N times, this calculation will be done N times. To make it more better, we can change it to:
```
const arr = ['a','b','c','d','e'];
for(let i=0, arrSize=arr.length; i<arrSize; i++) {
  console.log('data: ', arr[i]);
}
```

## Lab: Q1