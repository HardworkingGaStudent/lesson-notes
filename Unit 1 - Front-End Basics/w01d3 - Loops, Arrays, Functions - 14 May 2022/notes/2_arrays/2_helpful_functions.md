# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Helpful Functions in Arrays

## At the end of this lesson, you should:
1. Know some useful functions available by default

Note: the following functions are specific to Javascript. Other programming languages have same or similar functions for arrays as well

## .length
This is to get the size of the array
```
const arr = ['a','b','c','d','e'];
console.log('arr.length: ', arr.length);
```

## .push(data)
This is to adds data to the end of the array
```
const arr = ['a','b','c','d','e'];
arr.push(1);
console.log('arr: ', arr);
```

## .unshift(data)
This is to adds data to the beginning of the array
```
const arr = ['a','b','c','d','e'];
arr.unshift(1);
console.log('arr: ', arr);
```

## .pop(data)
This is to remove data from the end of the array
```
const arr = ['a','b','c','d','e'];
const returnedValue = arr.pop();
console.log('arr: ', arr);
```

## .shift(data)
This is to remove data from the beginning of the array
```
const arr = ['a','b','c','d','e'];
const returnedValue = arr.shift();
console.log('arr: ', arr);
```

## arr1.concat(arr2)
This is to combine 2 arrays together.
```
const arr1 = ['a','b','c','d','e'];
const arr2 = [5,6,7,8,9];
const newArr = arr1.concat(arr2);
console.log('newArr: ', newArr);
```