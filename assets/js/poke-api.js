const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return  fetch(url)  /* Vai lá e pega o URL */
            .then((response) => response.json())    /* Se deu certo, transforma o que veio do URL em JSON e em objeto JS */ 
            .then((jsonBody) => jsonBody.results)  /* Pega só a parte 'results' do objeto (a lista de Pokémon) */
            .catch((error) => console.error(error))
}