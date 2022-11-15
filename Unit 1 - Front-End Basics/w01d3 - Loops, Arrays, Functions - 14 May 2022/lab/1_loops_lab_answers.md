## Q1
```
const arr = [2,3,4,6,7,8,9,29];
const arr1 = []
console.log('arr.length: ', arr.length)
const lastItemInArray = arr[arr.length-1]
console.log('lastItemInArray: ', lastItemInArray);
for(let i=0, endCondition=arr.length; i<endCondition; i++) {
  arr1[i] = arr[endCondition-1-i]
}
console.log('arr: ', arr)
console.log('arr1: ', arr1)

for(let i=arr.length-1, j=0; i>=0; i--) {
  // arr1[j++] = arr[i]
  arr1[j] = arr[i]
  j+=1
}
console.log('arr: ', arr)
console.log('arr1: ', arr1)
```