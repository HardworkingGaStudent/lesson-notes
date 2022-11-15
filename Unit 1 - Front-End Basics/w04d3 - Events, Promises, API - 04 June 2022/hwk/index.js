class QuotesObject {
  constructor() {
    this.randomNumber = null;
    this.quote = "";
    this.author = "";
  }

  generateRandomNumber(maxLength) {
    return Math.floor(Math.random() * maxLength);
  }

  async fetchQuotes(url) {
    const response = await fetch(url);
    const data = await response.json();

    this.randomNumber = this.generateRandomNumber(data.length);
    this.quote = data[this.randomNumber].text;
    this.author = data[this.randomNumber].author;

    // console.log("quote is: " + this.quote);
    // console.log("author is: " + this.author);

    this.setInnerHtmlValue();
  }

  setInnerHtmlValue() {
    const htmlText = document.querySelector(".random-quote-text");
    const htmlAuthor = document.querySelector(".random-quote-author");

    htmlText.innerHTML = this.quote;
    htmlAuthor.innerHTML = this.author;
  }
}

const quotesObject = new QuotesObject();
quotesObject.fetchQuotes("https://type.fit/api/quotes");
