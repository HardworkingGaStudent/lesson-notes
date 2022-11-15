# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Const

## At the end of this lesson, you should:
1. Understand about `const` & arrays in Javascript

## `const` is not what you think
```
const arr =[1,2,3];
```
The above code does not mean we cannot modify the array. It means we cannot reassign another array to the variable `arr`.

eg:
```
const arr =[1,2,3];
console.log('arr before: ', arr);
arr.push('a');
console.log('arr after: ', arr);

// =========================

arr = [3,4,5];
```