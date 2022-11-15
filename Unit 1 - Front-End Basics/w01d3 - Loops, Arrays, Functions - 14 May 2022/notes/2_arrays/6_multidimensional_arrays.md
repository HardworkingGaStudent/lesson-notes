# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Multidimensional Arrays

## At the end of this lesson, you should:
1. Understand what is a muldimensional array
2. Understand how to create a muldimensional array
3. Understand how to work with muldimensional array

## What is a multidimensional array?
A multidimensional array is basically an array within an array.
eg:
```
const arr = [
  [1,2,3,4,5],
  ['a','b','c']
]
```

## How to work with a multidimensional array?
You just work with it as though its an array.
```
const arr = [
  [1,2,3,4,5],
  ['a','b','c']
]
```

Given the above, how do we get `'b'`?
Answer: `arr[1][1];`

How about if we want to loop through?
Loop through the first array. For each value within the top most array, it is an array.
```
const arr = [
  [1,2,3,4,5],
  ['a','b','c']
];
const arrSize = arr.length;
for(let i=0; i<arrSize; i++){
  const innerArr = arr[i];
  const innerArrSize = innerArr.length;
  for(let j=0; j<innerArrSize; j++) {
    console.log(`arr[${i}][${j}]: `, innerArr[j])
  }
  console.log(' --------------- ');
}
```

## Notes on spread operator
Spread operator only flatten the first level of an array.
eg:
```
const arr1 = [2,3,4,5];
const arr2 = [arr1];
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log(' ------------ ');
const arr3 = [...arr2];
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('arr3: ', arr3);
console.log(' ------------ ');
arr1.push('xxx');
arr2.push('yyy')
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('arr3: ', arr3);
console.log(' ------------ ');
```