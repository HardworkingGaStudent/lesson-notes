const express = require('express')
const pokemonController = require('./controllers/pokemon_controller')

const app = express()
const port = 3000

// tell express which template engine to use
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Pokemon Routes
app.get('/pokemon', pokemonController.listPokemon)
app.get('/pokemon/:pokemon_id', pokemonController.showPokemon)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})