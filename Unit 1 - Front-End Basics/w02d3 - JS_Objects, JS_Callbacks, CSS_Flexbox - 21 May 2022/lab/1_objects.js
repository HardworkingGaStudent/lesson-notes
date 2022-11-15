// 1. Dog:
// Create an object called dog that has the following properties:
// name (a string, give your dog a name)
// age (a number, give your dog an age)
// Console.log the dog object to check if it's correct
// Console.log just the dog's name
// Console.log just the dog's age

const dog = {
    name: "Robert",
    age:46
}

console.log(dog)
console.log(dog.name)
console.log(dog.age)

// Celebrity
// Create an object called celebrity that has the following properties:
// name (a string, give the celebrity a name)
// age (a number, give the celebrity an age)
// isCurrrentlyTweeting (a boolean)
// Console.log the celebrity object
const celebrity = {
    name: "charles yeo",
    age:500,
    isCurrentlyTweeting: Boolean()
}

console.log(celebrity)
// Console.log just the name of the celebrity
console.log(celebrity['name'])

// Console.log just the age of the celebrity
console.log(celebrity['age'])

// Console.log whether or not the celebrity is currently tweeting
console.log(celebrity['isCurrentlyTweeting'])

// Write conditional that will print "Turn off Twitter" if the celebrity is currently tweeting.
celebrity['isCurrentlyTweeting']=true
if (celebrity['isCurrentlyTweeting']===true){
    console.log("Turn off Twitter")
}


// Q2: Accessing Objects
// Create an empty object called macros (Do not write in to this empty object. Instead, add keys and values with macros.keyName = "value")
const macros = {}

// Add to the object a key protein with a value 'tempeh'
macros['protein']='tempeh' /*other syntax: macros.protein='tempeh'*/

// Add to the object a key carbohydrates with a value 'spuds'
macros['carbohydrates']='spuds'

// Add to the object a key fats with a value 'olive oil'
macros['fats']='olive oil'

// Console.log the macros object to check if all the macros are there
console.log(macros)

// TIPS: After each key-value addition, console.log the macros object to make sure the new keys and values show up.

// Create an object called guitar with the following properties:
// a key strings with value 6
// a key isAcoustic with value true (boolean)
const guitar = {}
guitar.strings=6
guitar.isAcoustic=Boolean(true)

// Change the value of strings to 100
// console.log the value of strings
guitar['strings']=100
console.log(guitar['strings'])

// Change the value of isAcoustic to false
// Console.log the value of isAcoustic
guitar['isAcoustic']=false
console.log(guitar['isAcoustic'])

// Without writing into your object directly, add a key belongsTo with the value 'Dimebag Darrell'
// Console.log the value of belongsTo
guitar.belongsTo = 'Dimebag Darrel'
console.log('value of guitar.belongsTo is:', guitar.belongsTo)

// const person = {
//     name: 'Ben',
//     age: 18
// }

// const personAddress = {
//     address: '79 Anson Road'
// }

// const test = Object.assign(person, personAddress)

// // console.log('personAdress >>>', personAddress)
// // console.log('test >>>', test)

// test.name = 'Bob'
// console.log('test after >>>', test)
// console.log('person >>>', person)


// Change the value of belongsTo to 'Mr. Rogers'
guitar.belongsTo = 'Mr. Rogers'

// Console.log the entire guitar object
console.log(guitar)


// Q3: Bracket Notation
// Create an empty object called testObject
// Give testObject a key called 'this is a test' with the value 'test'
// Console.log the value of the key 'this is a test'
// Give testObject a key called 2 with the value "I'm just messing around with objects"
// Console.log the value of the key 2
const testObject={}
testObject['this is a test'] = 'test'
console.log(testObject['this is a test'])
testObject['2'] = 'I\'m just messing around with objects'
console.log(testObject['2']) 

// Q4: Conditionals
// Given the following object:
const ethan = {
  age: 30,
  name: 'Ethan'
};

// console.log 'You are still young' if ethan age is >= 30
// console.log 'No such property' if ethan.something is undefined

if (ethan.age >= 30) {
    console.log('You are still young')
}

if (!ethan.something) {
    console.log('no world')
}
