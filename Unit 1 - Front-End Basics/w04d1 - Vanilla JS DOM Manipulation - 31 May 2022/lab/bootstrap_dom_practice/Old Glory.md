# Old Glory

---
Title: Old Glory - Bootstrap<br>
Type: Homework<br>
Creator: Karolin Rafalski<br>
Modified by: Jerrica Bobadilla<br>
Competencies: CSS Frameworks, Bootstrap<br>
Prerequisites: basic HTML, CSS

---


## Objective

You will be updating the look of a website: Old Glory Insurance. All they managed to get on their website is the HTML content and absolutely no styling. Your job is to style up their website using the Bootstrap CSS framework.

### Set Up

1. Connect the `style.css` file
1. Connect the Bootstrap CDN file

   `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">`

### Reference

1. [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/getting-started/introduction/) to see what classes you can use

## Activity

Go through the bootstrap documentation linked above and add the appropriate classes into the provided `index.html` to match the following view:

![](https://imgur.com/0fB0DoU.png)

<details>
    <summary>Note: Bootstrap uses responsive styling! Check out your website in the mobile view, it should look something like this</summary>

![](https://imgur.com/ao3Whot.png)
</details>

---

## DOM Manipulation Exercises

For this exercise, feel free to add new HTML `id` or `classes` to make DOM targeting in JS easier.

Using JS in main.js:

1. Change `h1` text colour to yellow
1. In the FIRST section, FIRST article, add an additional threat to list item with text `AI will take over the world`.
1. Turns out, the insurance plan `Unobtainium` is too expensive and nobody is buying. Remove that table row.
1. In the form:
   - Email, coverage are compulsory fields. Ensure that when a user submits the form, it alerts the user if either is not filled
   - User must tick the checkbox, if user did not tick, alert after form submit
   - If all good, alert the user that form submission is successful

---

[Extra special thanks to SNL for the content and inspiration](http://www.nbc.com/saturday-night-live/video/old-glory-insurance/n10766?snl=1)