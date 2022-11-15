// Q: Lets try creating a new object using class
// Create an object called Person.
// This object should have the following properties:
// numOfLegs: number (have a value of 2)
// numOfArms: number (have a value of 2)
// name: string
// age: number
// eyeColour: string
// hairColour: string
// This object should have the following methods:
// greet Receive one argument: personName: string To do
// console.log(`Hi ${personName}!`);
// walk No argument To do:
// console.log('I am walking.');

class Person {
    constructor (name, age, eyeColour, hairColour) {
        this.numOfLegs= 2
        this.numOfArms= 2
        this.name= name
        this.age= age
        this.eyeColour= eyeColour
        this.hairColour= hairColour
    }

    greet (person) {
        console.log(`Hi ${person.name}!`)
    }

    walk () {
        console.log(`${this.name} is walking.`);
    }
}

const persona = new Person('Karolin', 41, 'green', 'copper dark ash blonde')
console.log(persona)

const me = new Person("Karolin", 41, 'green', 'copper dark ask blonde')
const you = new Person('Matt', 36, 'blue', 'blonde')

me.greet(you)
you.greet(me)

me.walk()
you.walk()