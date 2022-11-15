# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> IIFE

## At the end of this lesson, you should:
1. What is `IIFE`?
2. How to use it?

## What is `IIFE`?
`IIFE` stands for `Immediately Invoked Function Expression`.
eg:
```
(function() {
  //
})();
```
or
```
(() => {
  //
})()
```
`IIFE` exist to avoid polluting the global namespace.

## How to use it?
```
(() => {
  // some initiation code
  let firstVar;
  let secondVar;
})();
```
the following variables will be discarded after the function is executed
```
firstVar
secondVar
```