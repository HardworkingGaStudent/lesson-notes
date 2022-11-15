# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Labs: Object Basics

## Q1: Build the following object
1. Dog:
    - Create an object called `dog` that has the following properties:
      - name (a string, give your dog a name)
      - age (a number, give your dog an age)
    - Console.log the `dog` object to check if it's correct
    - Console.log just the dog's name
    - Console.log just the dog's age
2. Celebrity
    - Create an object called `celebrity` that has the following properties:
      - name (a string, give the celebrity a name)
      - age (a number, give the celebrity an age)
      - isCurrrentlyTweeting (a boolean)
    - Console.log the `celebrity` object
    - Console.log just the name of the `celebrity`
    - Console.log just the age of the `celebrity`
    - Console.log whether or not the `celebrity` is currently tweeting
    - Write conditional that will print "Turn off Twitter" if the celebrity is currently tweeting.

## Q2: Accessing Objects

1. Create an empty object called `macros` (Do not write in to this empty object. Instead, add keys and values with `macros.keyName = "value"`)

    - Add to the object a key `protein` with a value `'tempeh'`
    - Add to the object a key `carbohydrates` with a value `'spuds'`
    - Add to the object a key `fats` with a value `'olive oil'`
    - Console.log the `macros` object to check if all the macros are there

    **TIPS**: After each key-value addition, console.log the macros object to make sure the new keys and values show up.

2. Create an object called guitar with the following properties:
    - a key `strings` with value 6
    - a key `isAcoustic` with value true (boolean)
    - Change the value of `strings` to 100
      - console.log the value of `strings`
    - Change the value of `isAcoustic` to false
      - Console.log the value of `isAcoustic`
    - Without writing into your object directly, add a key `belongsTo` with the value `'Dimebag Darrell'`
      - Console.log the value of `belongsTo`
    - Change the value of `belongsTo` to `'Mr. Rogers'`
    - Console.log the entire `guitar` object

## Q3: Bracket Notation
1. Create an empty object called `testObject`
    - Give `testObject` a key called `'this is a test'` with the value `'test'`
      - Console.log the value of the key `'this is a test'`
    - Give `testObject` a key called `2` with the value `"I'm just messing around with objects"`
      - Console.log the value of the key `2`

## Q4: Conditionals

Given the following object:

    const ethan = {
      age: 30,
      name: 'Ethan'
    };

1. console.log `'You are still young'` if `ethan` age is >= 30
2. console.log `'No such property'` if `ethan.something` is undefined