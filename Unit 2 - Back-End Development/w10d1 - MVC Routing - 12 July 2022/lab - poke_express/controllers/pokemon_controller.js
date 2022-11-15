const pokemon = require("../models/pokemon");

const controller = {
  listPokemon: (req, res) => {
    res.render("index.ejs", {
      myPageTitle: "See All The Pokemon!",
      pokemon, // short form for pokemon: pokemon
    });
  },

  showPokemon: (req, res) => {
    // get the pokemon id from route param
    const pokemonID = req.params.pokemon_id;

    // validate the pokemon id
    const idNum = parseInt(pokemonID);
    let errMsg = "";
    if (isNaN(idNum)) {
      errMsg = "must be number";
    }
    if (idNum < 0 || idNum > pokemon.length) {
      errMsg = "must be within range";
    }

    // get the pokemon with the id from the "database"
    const p = pokemon[idNum];

    // render the "show" ejs template
    res.render("show", {
      p: p, // or use short form -> p,
      errMsg: errMsg,
    });
  },
};

module.exports = controller;
