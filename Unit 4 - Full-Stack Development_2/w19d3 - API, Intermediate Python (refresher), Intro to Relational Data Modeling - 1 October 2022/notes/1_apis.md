[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Introduction to APIs

## Overview

This lesson walks through the idea of application programming interfaces (APIs), starting with their definition. It touches on JSON versus XML, followed by a series of exercises that introduce keys and parameters.

## Learning Objectives

In this lesson, students will:

- Describe what an application programming interface (API) is and why we might use one.
- Identify common APIs on the web.
- Call an API.

## Duration

45 minutes

## Agenda

| Duration | Activity     |
| -------- | ------------ |
| 3 mins   | Welcome      |
| 7 mins   | API Overview |
| 31 mins  | Calling APIs |
| 3 mins   | Summary      |

---

## Lesson Objectives

After this lesson, you will be able to…

- Describe what an application programming interface (API) is and why we might use one.
- Identify common APIs on the web.
- Call an API.

---

## Discussion: Web Magic

Have you seen…

- A website with Google Maps on the page (like Yelp)?
- A program that had live stock market info?
- A website that isn't Twitter but shows a live Twitter feed?
- Any app that pulls info from somewhere else?

How did they do this?

![](https://twimgs.com/ddj/images/article/2014/0314/GoogleMap_adrian.gif)

**Talking Points:**

- Give examples here, like…
- Have you seen a website that had a Google Map on it like Yelp? Yelp's developers _didn't_ build that map themselves, as it was created by Google. What if you want a Google Map embedded in your web app to show people where they can visit you? You aren't going to make that map yourself, so somehow you have to call Google. Well, Google has a way you can get that map information — all you have to do is send a request to the URL that Google provides, and it gives you back a map you can use.

---

## APIs (Application Program Interfaces)

An API is a service that provides raw data for public use.

APIs give us data, maps, anything!

### What's the API?  

- [The Star Wars API: Request R2-D2 info](http://swapi.co/api/people/3)
- [Markit Digital API: Request current Apple stock info](http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL)
- [OpenWeatherMap: The current weather in London](https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22)

Do you think you've been on websites that call an API?

> Does the JSON look unreadable in the browser? If you're using Chrome, install the [JSONView plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en).

- Open each of these URLs in a new window so students can see what happens when you call an API.
- Encourage a discussion if students can think of other APIs.

**Talking Points:**

- Basically, an API is a service that provides raw data for public use. As third-party software developers, we can access an organization's API and use its data within our own applications. The term now commonly refers to web URLs that can be accessed for raw data.
- Why recreate data when we don't have to? Think about past projects or ideas that would be easier if you could pull in data already gathered elsewhere.
- APIs can provide us with data that we would otherwise not be able to create ourselves.
- There are a variety of APIs available on the internet. To call an API, send a request to a URL and that API will return data to your program. You can pull data from anywhere that offers an API.
- You can make this request as specific as you'd like — each web app out there offers different options for its API. You just have to find out what you can request!
- Here are just a few examples of APIs you can use. Check it out — the left column is the common name you might know. The right column is the URL to which you, in your program, would send a request. You can click those URLs to see what each call would return.

---

## How Do We Use an API?

We'll use the `requests` module.

```python
import requests

# Call the API by opening the URL and reading the data.
# We use the `get()` function in `requests`.
response = requests.get("<API URL HERE>")

print(response)
# Prints out the requested information!
```

This works, but there's one very helpful line missing!

Before we see this in action, let's look at what the API might return.

**Talking Point:**

- We're going to demo this and write this code soon! But first, we need to see what the API might give us back.

---

## JSON vs. XML

Imagine: You write code for a list.

```python
my_list = [1, 4, 2]
my_list.append(len(my_list))
my_list[1] = "new element!"

for item in my_list:
  print item
```

But then, `my_list` is unexpectedly a dictionary, or an int, or even a class! The code we wrote won't work.

APIs can give data back in two ways: JSON or XML. Depending on what the API does, we need to write our program a different way.

**Talking Point:**

- We're going to demo this and write this code soon! But first, we need to see what the API might give us back.

---

## How Do APIs Give Us Info? Option 1: JSON

Here's a potential return from an API:

```json
{
  "users": [
    {"name": "Wonder Woman", "id": 0},
    {"name": "Black Panther", "id": 1},
    {"name": "Batgirl", "id": 2}
  ]
}
```

Looks like a dictionary with a list of dictionaries inside it, right?

But it's not a dictionary! It's **JSON** (JavaScript Object Notation).

The `requests` module has a [built-in JSON decoder](http://docs.python-requests.org/en/master/user/quickstart/#json-response-content) to turn JSON into a Python dictionary.

We can **decode** JSON with `decoded_data = response_from_request.json()`.

**Talking Points:**

- So, APIs are great… What does it look like?
- **JSON** stands for "JavaScript Object Notation" and has become a universal standard for serializing native data structures for transmission. It is lightweight, easy to read, and quick to parse. JSON looks like this — it's easily readable and information is separated with braces (`{}`) and commas.

---

## How Do APIs Give Us Info? Option 2: XML

Instead of JSON, we might get XML:

```xml
<users>
  <user id="0">
    <name>Wonder Woman</name>
  </user>
  <user id="1">
    <name>Black Panther</name>
  </user>
  <user id="2">
    <name>Batgirl</name>
  </user>
</users>
```

JSON is certainly easier to read!

- We'll stick with JSON whenever we can.

> **Pro tip:** Most of you don't need to know about XML, but if you're working with legacy code or an older API, you may have to use it. In that case, look up [Element Tree XML](https://python.readthedocs.io/en/stable/library/xml.etree.elementtree.html).

**Talking Points:**

- **XML**, which stands for "Extensible Markup Language," is one of the first serialized data formats (itself based on HTML). XML is messy and cumbersome to parse, but remains a major format because of its legacy usage across the web.
- Conveniently, many APIs publish data in multiple formats and let you specify which you'd like. For example,
`https:///api/index.php?output=json` or `https:///api/index.php?output=xml`.
- We'll be using JSON.

---

## Let's Choose an API

**To recap:** APIs give us data we can use in either XML or JSON.

Let's call one!

Check out [http://api.open-notify.org/astros.json](http://api.open-notify.org/astros.json), which tells us the people currently aboard the International Space Station (ISS).

```json
{
 "number": 5,
 "people": [
  {"craft": "ISS", "name": "Oleg Novitskiy"},
  {"craft": "ISS", "name": "Thomas Pesquet"},
  {"craft": "ISS", "name": "Peggy Whitson"},
  {"craft": "ISS", "name": "Fyodor Yurchikhin"},
  {"craft": "ISS", "name": "Jack Fischer"}
  ],
  "message": "success"
}
```

- The number of astronauts and names currently aboard the International Space Station (ISS).
- Go to the website in the browser so that you can see what it returns.
- Ask if it's JSON or XML to check their memory.

---

## Calling an API

- Import the `request` module.
- Call the API (`requests.get()`).
- Parse the response with `response.json()`.

- Go down this code line by line. Why do we import these modules? What does each line do? Where do `.read` and `.loads` come from?
- Terminology: parse.

**Repl.it note code is [here](https://repl.it/@SuperTernary/python-programming-apis-iss?lite=true)**:

```python
# Call the API by opening the URL and reading the data.
response = requests.get("http://api.open-notify.org/astros.json")

# Decode the raw JSON data.
response_data = response.json()

print(response_data)
```

---

## You Do: Calling an API

Open a new file, `my_api.py`. Type and run the code:

```python
import requests

# Call the API by opening the URL and reading the data.
response = requests.get("http://api.open-notify.org/astros.json")

# Decode the raw JSON data.
response_data = response.json()

print(response_data)
```

---

## We Do: A New API

Awesome! Go back to your file. Let's instead call this URL:

`http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL`

Why does it break? We can't parse XML like JSON.

```xml
<QuoteApiModel>
  <Data>
    <Status>SUCCESS</Status>
    <Name>Apple Inc</Name>
    <Symbol>AAPL</Symbol>
    <LastPrice>185.5</LastPrice>
    <Change>1.34</Change>
    <ChangePercent>0.7276281494</ChangePercent>
    <Timestamp>Thu Jun 28 00:00:00 UTC-04:00 2018</Timestamp>
    <MarketCap>911758099000</MarketCap>
    <Volume>17365235</Volume>
    <ChangeYTD>169.23</ChangeYTD>
    <ChangePercentYTD>9.6141346097</ChangePercentYTD>
    <High>186.21</High>
    <Low>183.8</Low>
    <Open>184.1</Open>
  </Data>
</QuoteApiModel>
```

**Talking Point:**

- XML is out of the scope of our class. But, if your API errors, check that you're correctly parsing XML or JSON. We'll go back to JSON now.

---

## Quick Review

We've called an API! Great job. We did this with the `get()` function in the `requests` module. APIs are made available by other websites or applications. They give us data we can use in either XML or JSON.

```python
import requests
response = requests.get("http://api.open-notify.org/astros.json")
response_data = response.json()
print(response_data)
```

JSON:

```json
{
  "users": [
    {"name": "Wonder Woman", "id": 0},
    {"name": "Black Panther", "id": 1}
  ]
}
```

XML:

```xml
<users>
  <user id="0">
    <name>Wonder Woman</name>
  </user>
  <user id="1">
    <name>Black Panther</name>
  </user>
</users>
```

---

## You Do: Back to JSON

Back in your file, change the API call back to `http://api.open-notify.org/astros.json`.

Once it's decoded, it's a dictionary!

Replace your `print` statement:

```python
for key, ratings in response_data_decoded.items():
    print("Key:", key, "Value:", ratings, "\n")
```

Can we go further? Try to only print the `name`s of the astronauts.

5 MINUTES

---

## Name Printing: Solution

Working backward, we have a:

- Dictionary (key: `name`).
- Which is inside a list (the value of `people`).
- Which is inside a dictionary (key: `people`).

```
For message the value is success.

For people the value is [{'craft': 'ISS', 'name': 'Oleg Artemyev'}, {'craft': 'ISS', 'name': 'Andrew Feustel'}, .....].

For number the value is 6.
```

```python
for item in response_data_decoded["people"]:
    print(item["name"])
```

---

## You Do: Shakespeare

In your file, call the Shakespeare API `http://ShakeItSpeare.com/api/poem`.

Print only the poem.

3 MINUTES

---

## Shakespeare: Solution

Print only the poem.

```python
import requests

# Call the API by opening the URL and reading the data.
response = requests.get("http://ShakeItSpeare.com/api/poem")

# Decode the raw JSON data.
response_data = response.json()

print(response_data["poem"])
```

---

## Quick Review

When we convert JSON, it keeps the same format, only in a Python structure.

When parsing an API's return, look through the JSON to find the exact structure you need. Is it the string value from the `poem` key? Or the value from each `name` key in a list of dictionaries, which is the value of the `people` key?

Think it through before writing your code.

```python
# From the ISS API:
{  # The outer dictionary
 "number": 5,  # Key: value
 "people": [  # Key and value, again. Here, the value is a list of dictionaries.
  {"craft": "ISS", "name": "Oleg Novitskiy"},
  {"craft": "ISS", "name": "Thomas Pesquet"},
  {"craft": "ISS", "name": "Peggy Whitson"},
  {"craft": "ISS", "name": "Fyodor Yurchikhin"},
  {"craft": "ISS", "name": "Jack Fischer"}
  ],
  "message": "success"   # Key and value.
}

# From the Shakespeare API

{ # The outer dictionary.
  # The first key: value is the poem.
  'poem': 'Pardoned!\nNurs.\nBepaint my cheek?',
  'markov': 2,  # The second key: value pair.
  'lines': 3  # The third key: value pair. This is the number of lines in the poem.
}
```

---

## I Do: API Authentication

Many APIs are free but require a **key**. This identifies the developer requesting access.

If we call the Giphy API:

- With no key, `http://api.giphy.com/v1/gifs/search?q=funny+cat`, we get `Error - Unauthorized`!

- With a key, `http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC`, it works!

Syntax Notes:

- The main API URL is `http://api.giphy.com/v1/gifs/search`.
- `?` always delineates a URL and its parameters.
  - (The `?` is a standard for every URL! Searching Google for "banana," with `q` short for "query:" `https://www.google.com/search?q=banana`).
  - (Here's another one! Searching Amazon for "banana:" `https://www.amazon.com/s?field-keywords=banana`.)

**Most importantly**, never publish your key for a backend service, including on GitHub! (This is an example.) There are other ways to provide your key to a server in order to keep that key safe. However, if your code is using JavaScript, that's ok as that provides only read access in general (assuming you have your permissions properly configured.) This is a sticking point for developers coming to Python from a front-end perspective.

- Syntax is called out here for the first time. Continue calling it out throughout the rest of the lesson. Every API has different parameters — read the docs!
- Show this in a browser.

**Talking Points:**

- While the majority of APIs are free to use, many of them require an API "key" that identifies the developer requesting data access.
- This is done to regulate usage and prevent abuse. Some APIs also rate-limit developers, meaning they have caps on the free data allowed during a given time period.
- Some APIs, such as Spotify's music catalog, might seem like they should be available for anyone to access, but imagine if PayPal had an API from which shops could request your money. Now, imagine Etsy calls PayPal when you buy something. You'd want Etsy to have to prove it was actually Etsy, right? You don't want anyone to be able to pretend to be Etsy, go to PayPal, and charge you $500. Instead, you'd want Etsy to somehow authenticate to PayPal.
- This is accomplished by giving Etsy a private key to use at PayPal that only Etsy knows. Every time Etsy makes a request to PayPal, Etsy can say, "Hey, I'm requesting this. Here is my proof that I'm allowed to do so."
- When you are calling APIs that require a key, it's up to you to store those keys somewhere private. They are the only proof that you are you and you are allowed to call that API, after all.

---

## You Do: OpenWeather API

Read about the [API](https://openweathermap.org/current).

Use this key: `&appid=052f26926ae9784c2d677ca7bc5dec98`.

Call this URL: `http://api.openweathermap.org/data/2.5/weather?zip=<ZIP_CODE_HERE>,us&appid=052f26926ae9784c2d677ca7bc5dec98`.

Note the parameters:

- `zip=<ZIP_CODE_HERE>`
- `appid=<KEY HERE>`

Enter any zip code you choose (e.g., `60614`).

- Display the current temperature, high and low temperature, current weather description, and the name of the city that came back from the API.

**Bonus:** Print the temperature in both Fahrenheit and Celsius.

5-10 MINUTES

---

## Summary

APIs:

- Handy URLs from which we can get information.
- Sometimes require keys.
- Usually free.
- Call with the `requests()` module.

XML and JSON:

- Two formats in which APIs might return information to us.
- XML is legacy.
- JSON looks like a dictionary.

---

## Additional Resources

- Here's an example of a [stolen key horror story](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight).
- The [Programmable Web API Directory](http://www.programmableweb.com/apis/directory)
- [Element Tree XML](https://python.readthedocs.io/en/stable/library/xml.etree.elementtree.html)

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_