class USS_Schwarzenegger {
    constructor () {
        this.hull = 20
        this.firepower = 5
        this.accuracy =.7
    }

    attack (invader) {
        let attackAccuracy = Math.random()
        if (attackAccuracy < this.accuracy) {
            invader.hull -= this.firepower
            alert(`You attacked Invader for ${this.firepower} damage`)
            console.log(`Player attacked Invader for ${this.firepower} damage`)
        }
        else {
            alert("Your attack on Invader missed")
            console.log("Your attack missed")
        }
    }
}

function getRandomNum (min, max) {
    if (min >= 1) {
        return Math.floor(Math.random() * (max-min+1)) + min
    } else {
        return Math.random() * (max-min) + min
    }
}

class AlienShip {
    constructor () {
        this.hull = getRandomNum(3,6)
        this.firepower = getRandomNum(2,4)
        this.accuracy = getRandomNum(.6,.8)
    }

    attack (defender) {
        let attackAccuracy = Math.random()
        if (attackAccuracy < this.accuracy) {
            defender.hull -= this.firepower
            alert(`Invader attacked you for ${this.firepower} damage`)
            console.log(`Invader attacked Player for ${this.firepower} damage`)
        }
        else {
            alert("Invader's attack on you missed")
            console.log("Invader attack missed")
        }
    }

}

class Game {
    constructor (invadersCount=6) {
        this.defender = new USS_Schwarzenegger()
        this.invadersCount = invadersCount
        this.invader = new AlienShip()
        this.round = 1
    }

    status () {
        console.log(`Current round: ${this.round}
        Showing battle stats:`)
        console.table({
            "Defender HP:": `${this.defender.hull}`,
            "Invader HP:": `${this.invader.hull}`,
            "Number of invaders:": `${this.invadersCount}`
        })
    }

    start () {
        alert("+++++_Welcome to Space Battle_+++++")
        this.status()

        // while looping based on number of invaders
        // if current invader hp < 1, decrement the invadersCount by 1 & initialize a new invader
        // internal while loop based on the invader and defender HP
        // create a scenario that runs inside the internal while loop - take turns attacking (call for prompt)
        // prompt - attack to continue, or retreat to end the game

        gameloop:
        while (this.invadersCount > 0) {

            while (this.invader.hull > 0 && this.defender.hull > 0) {
                this.status()
                const playerInput = confirm(`Round ${this.round}. Your turn: attack?
Enter OK to attack. Enter Cancel to retreat. *IF you retreat, you forfeit the game`)

                // Action based on playerInput -> attack
                if (playerInput) {
                    // Player attacks invader. If invader hp < 0, break out of this while loop
                    console.log("Player chose to attack Invader")
                    this.defender.attack(this.invader)
                    if (this.invader.hull <= 0) {
                        alert("Invader has been defeated")
                        console.log("Invader has been defeated")
                        this.round += 1
                        break
                    }
                    
                    // Invader's turn. Invader attacks Player
                    console.log("Invader's turn")
                    this.invader.attack(this.defender)

                    // Alert end of round stats
                    alert(`End of round ${this.round}
    Player HP: ${this.defender.hull}
    Invader HP: ${this.invader.hull}`)

                    this.round += 1
                } 
                // Action based on playerInput -> retreat
                else {
                    alert(`You have forfeited the game`)
                    this.defender.hull = -1
                    break gameloop
                }

                // Compile end of round actions
                // 1. Invader is defeated and defender is still alive
                if ((this.invader.hull <= 0) && (this.defender.hull > 0)) {
                    alert(`Player has defeated Invader ${this.invadersCount}`)
                    console.log(`Invader ${this.invadersCount} has been defeated by Player`)
                }
                // 2. If defender hp < 0
                if (this.defender.hull <= 0) {
                    alert(`Player has been defeated by invaders`)
                    break gameloop
                }
            }

            // Update variables for next round
            this.invadersCount -= 1
            if (this.invadersCount >= 1) {
                this.invader = new AlienShip()
                alert(`Round ${this.round}. New invader has come! Invaders left: ${this.invadersCount}`)
            }
        }

        // End of while - gameloop
        // if defender hp < 0 : lose the game
        if ((this.defender.hull < 0) && (this.invadersCount > 0)) {
            alert("Game over. You Lose")
            console.log("Game over. You Lose")
        }
        // if defender hp > 0 and invadersCount === 0, win the game
        if ((this.invadersCount === 0) && (this.defender.hull > 0)) {
            alert("Game over. You win")
            console.log("Game over. You win")
        }
    }
}

game_instance = new Game()
game_instance.start()