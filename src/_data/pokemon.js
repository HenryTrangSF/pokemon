const Pokedex = require('pokedex-promise-v2');

let P = new Pokedex();

module.exports = async () => {
    // Start the limit at 0 to quickly get the number of pokemon in the database
    let interval = {
        limit: 0,
        offset: 0
    }

    // Get the count of every pokemon in the database
    let count = await P.getPokemonsList(interval)
        .then(function(response) {
            return response.count;
        })
        .catch(function(error) {
            console.log(error);
            return;
        })
    
    // Update the interval to the pokemon count
    interval = {
        // limit: count,
        limit: 9,
        offset: 0
    }

    // Fetches the entire database on pokemon resources
    let pokemonsList = await P.getPokemonsList(interval)
        .then(function(response) {
            return response.results;
        })
        .catch(function(error) {
            console.log(error);
            return;
        })
    
    // Initialize the pokemon array
    let endpoints = [];

    for (let i = 0; i < interval.limit; i++) {
        const element = pokemonsList[i];
        endpoints.push(element.url);
    }

    pokemon = await P.resource(endpoints);

    return pokemon;
}