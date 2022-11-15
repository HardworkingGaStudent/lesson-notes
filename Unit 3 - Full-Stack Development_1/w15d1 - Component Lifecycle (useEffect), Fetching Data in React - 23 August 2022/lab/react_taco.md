# Random Taco! (or cocktail)

Use fetch to the below api

```js
   fetch('httptaco-randomizer.herokuapp.comrandomfull-tack=true')
```

to render the view of a random taco. No styling needed!

If taco went bust, how about getting a cocktail instead

```js
   fetch('httpswww.thecocktaildb.comapijsonv11random.php')

   show
     cocktail name
     is alcoholic
     recommended glass
     instructions
```

![screen shot](httpsi.imgur.com1HbPnjB.png))

## Hungry for more

Create a button to render a fresh taco

Create a form and find more specific tacos, research the [api](httpsgithub.comevztacofancy-api)

Style away!

Have a random taco load on page load

[Hint](httpsreactjs.orgdocsstate-and-lifecycle.html#adding-lifecycle-methods-to-a-class)


## Bonus The Return of OMDB

- Make a new OMDB app that queries using the `s=` query (we used `t=` in the lesson). Rather than returning one movie with a bunch of details, it will return a list of closely matching movies.

- Render the list (note the data will be different, you'll have to look through it and figure out the keys and values)

- Bonus! On clicking one of the list of movies, have it do a `t=` search, and render the individual view that you got from lesson.