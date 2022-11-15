// 100 goblins
// at the start, all have
// 2nd pass - remove cure from all 2,4,6,8,10 ...
// 3rd pass - remove/add cure from all 3,6,9,12 //change the state to opposite

let goblinArray = []
// Create 100 goblin array - initially all no cure
for (let i = 0 ; i < 100; i++) {
    goblinArray.push(false)
}

// Remove/add cure from goblin

//for nth pass
for (let i = 1; i< 101; i++) {
    /// for each nth pass - increament should start from i, increament by i 
    for (let j = i; j< 101; j+=i) {
        console.log('j',j)
        goblinArray[j] = !goblinArray[j]
    }
}

let goblinIndex = []
goblinArray.forEach( (goblin, index) => {
    if (goblin == true) {
        goblinIndex.push(index)
    }
})

console.log('answer is :',goblinIndex)