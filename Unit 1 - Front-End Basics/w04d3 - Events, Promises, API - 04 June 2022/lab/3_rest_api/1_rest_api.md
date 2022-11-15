# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> REST API

## At the end of this lesson, you should:
1. Understand what is an API
2. Understand what is a REST API

---

## What is an API?

**API**: Application Programming Interface

Think of an API as public functions exposed by a program for another program to call to do something without having to know how it works

An example would be the [Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console_API).

Eg:
```js
console.log(...);
console.warn(...);
console.error(...);
console.table(...);
```

Looking at the console API, we know how to use it but we do not know how it works internally. We do not need to know how it is implemented. All we need to know is what is the input and what is its output.

This allows us developers to focus on building the functionality of our system / software / app instead of worrying about reimplementing commonly used functionalities.

> Stand on the shoulder of giants

## REST API

### What is REST?

**REST**: **RE**presentational **S**tate **T**ransfer

REST is a set of **architectural style**, not a protocol or a standard.

> A Web API (or Web Service) conforming to the REST architectural style is a REST API.

REST APIs are sometimes referred to RESTful APIs.

### REST API

Think of REST API as a specific set of standard & guidelines to allow communication between programs (services) over the internet.

When communication happen between such programs happen, the side that initiate the request to get a resource is the `client` and the side that fulfils the request is the `server`

A URL is called a **request** & the data sent back is a **response**