const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


    return  fetch(url)  /* Vai lá e pega o URL */
    .then((response) => response.json())    /* Se deu certo, transforma o que veio do URL em JSON e em objeto JS */ 
    .then((jsonBody) => jsonBody.results)  /* Pega só a parte 'results' do objeto (a lista de Pokémon) */
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
    .then((DetailsRequest) => Promise.all(DetailsRequest))
    .then((PokemonDetails) => PokemonDetails.map(convertPokeApiDetailToPokemon))
}