class Letter {
    #value = '';
    constructor(value='') {
      this.#value = value;
      this.isHidden = true;
    }
  
    check(char='') {
      if(char === this.#value) {
        this.show();
      }
    }
  
    show() {
      this.isHidden = false;
    }
  
    display() {
      return this.isHidden ? '_' : this.#value;
    }
  }
  
  class Word {
    #letters = [];
  
    constructor(value='') {
      this.value = value;
      this.#getLetters();
    }
  
    isFound() {
      return this.#letters.every(letter => letter.isHidden === false);
    }
  
    check(char='') {
      this.#letters.forEach(letter => letter.check(char));
    }
  
    display() {
      return this.#letters // [Letter, Letter, Letter]
        .map(letter => letter.display()) // ['_', 'a', '_']
        .join(' '); // '_ a _'
    }
  
    // Private methods below
  
    #getLetters() {
      this.#letters = this.value
                          .split('') // ['a','b','c']
                          .map(letter => (new Letter(letter))); // [Letter, Letter, Letter]
    }
  }
  
  class Hangman {
    static WORDS = [
      'correspond',
      'influence',
      'grant',
      'positive',
      'harmony',
      'mill',
      'pile',
      'camera',
      'execution',
      'write'
    ];
  
    #chosenWord = '';
    #guessedAlphabets = []
  
    constructor(maxNumOfGuesses=10) {
      this.maxNumOfGuesses = maxNumOfGuesses;
    }
  
    start() {
      this.#getWord();
      let counter = 1;
      let isFound = false;
  
      do {
        const alphabet = prompt(`(${this.#chosenWord.value}) Please guess an alphabet (${counter}/${this.maxNumOfGuesses}): ${this.#chosenWord.display()}`)
  
        if (alphabet !== null) {
          this.#chosenWord.check(alphabet);
          this.#guessedAlphabets.push(alphabet);
  
          isFound = this.#chosenWord.isFound();
  
          console.table({
            'Answer so far': this.#chosenWord.display(),
            'Your guesses': this.#getGuessedAlphabets()
          });
  
          if (isFound === true) {
            break;
          }
        }
        counter++;
      } while(counter <= this.maxNumOfGuesses);
  
      const overMsg = this.#overMessage(isFound);
      alert(overMsg);
    }
  
    // Private method below
  
    #overMessage(isFound=false) {
      return isFound ? 'You win' : 'You lose';
    }
  
    #getWord() {
      const randomWord = Hangman.WORDS[Math.floor(Math.random() * Hangman.WORDS.length)];
      this.#chosenWord = new Word(randomWord);
    }
  
    #getGuessedAlphabets() {
      return this.#guessedAlphabets.join(', ');
    }
  }
  
  const hangman = new Hangman();
  hangman.start();