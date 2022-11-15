class Letters {
    // #value = "";
    constructor (value="") {
        this.value = value
        this.isHidden = true
    }

    display () {
        return this.isHidden ? "_":this.value
    }

    matching(letter, alphabet) {
        if (letter.value === alphabet) {
            return true
        } return false
    }

    check (char="") {
        if (this.value === char) {
            this.isHidden = false
        } 
    }
}

class Word {
    #letters = [];

    constructor (value="") {
        this.value = value
        this.#getLetters(value)
    }

    #getLetters (value) {
        this.#letters = this.value.split("").map(letter => new Letters(letter))
    }

    display () {
        return this.#letters.map(letter => letter.display()).join(" ")
    }

    matching (alphabet) {
        return this.#letters.map(letter => letter.matching(letter, alphabet))
    }

    check (char="") {
        return this.#letters.forEach(letter => letter.check(char))
    }

    status () {
        return this.#letters.find(letter => letter.isHidden) ? false:true
    }
}

class Hangman {
    static availableWords = ["apple","banana","durian","orange","grapes","jackfruit","raspberry","pineapple"];
    #chosenWord = "";
    #guessedWords=[];

    constructor (maxGuessCount=10) {
        this.maxGuessCount = maxGuessCount
    }

    start () {
        // initialize variables
        let guessCounts = 0;
        let guessStatus = false;
        this.#getChosenWord()
        
        while (guessCounts <= this.maxGuessCount) {
            console.table({
                "Current answer so far: ": this.#chosenWord.display(),
                "Number of guesses left: ": `${guessCounts}/${this.maxGuessCount}`,
                "Alphabets guessed before: ": this.#guessedWords.toString()
            })

            const alphabet = prompt(`(hidden: ${this.#chosenWord.value}). Guess an alphabet:`)
            const matchingLetters = this.#chosenWord.matching(alphabet)
            const anyMatchingLetter = matchingLetters.some(letter => letter === true)
            this.#guessedWords.push(alphabet)
            console.log(anyMatchingLetter)
            
            if (anyMatchingLetter === true) {
                this.#chosenWord.check(alphabet)

                if (this.#chosenWord.status()) {
                    alert("Hurray")
                    break;
                }
            }

            else {
                guessCounts += 1
            }
        }

        if (guessCounts > this.maxGuessCount) {
            alert("Loser")
        }
    }

    #getChosenWord () {
        const randomWord = Hangman.availableWords[Math.floor(Math.random() * Hangman.availableWords.length)]
        this.#chosenWord = new Word(randomWord)
    }
}

hangman_instance = new Hangman
hangman_instance.start()