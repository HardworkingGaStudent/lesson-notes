# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> i++ vs ++i

## How does `i++` work?
Having the `++` after the variable means this is a postfix. In english, it means: **after**.

What this does is that it will add 1 to the variable after returning the value. See below to understand further:

```
let i = 0;
i++;
console.log('i: ', i); // i: 1

// ==============================

let j = 0;
let k = j++;
console.log('j: ', j); // j: 1
console.log('k: ', k); // k: 0
```

## How does `++i` work?
Having the `++` before the variable means this is a prefix. In english, it means: **before**.

What this does is that it will add 1 to the variable before returning the value. See below to understand further:

```
let i = 0;
++i;
console.log('i: ', i); // i: 1

// ==============================

let j = 0;
let k = ++j;
console.log('j: ', j); // j: 1
console.log('k: ', k); // k: 1
```

### Notes
1. There are only 2 types:
  - `++`: increment
  - `--`: decrement
2. No, `**` & `//` doesn't work.

### Quiz:
Given the codes, what are the outputs?

1.
```
let i = 3;
i--;
console.log('i: ', i); // i:

// ==============================

let j = 3;
let k = j--;
console.log('j: ', j); // j:
console.log('k: ', k); // k:
```

2.
```
let i = 3;
++i;
console.log('i: ', i); // i:

// ==============================

let j = 3;
let k = ++j;
console.log('j: ', j); // j:
console.log('k: ', k); // k:
```