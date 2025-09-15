const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function ConvertPokemonToli(pokemon) {
    return`            
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="https://user-images.githubusercontent.com/37589213/52086676-d41dce00-25a7-11e9-89fe-51a2aef284a9.gif" alt="${pokemon.name}">
                </div>
            </li>
        `
}   /* Aqui vai transformar o seu pokemon em uma lis HTML */

const PokemonsList = document.getElementById('PokemonsList')    /* uma constante para ir lá no meu documento HTML procurar um id chamado PokemonsList */

fetch(url)  /* Vai lá e pega o URL */
    .then((response) => response.json())    /* Se deu certo, transforma o que veio do URL em JSON e em objeto JS */ 
    .then((jsonBody) => jsonBody.results)  /* Pega só a parte 'results' do objeto (a lista de Pokémon) */
    .then((Pokemons) => {
        for (let i = 0; i < Pokemons.length; i++) {
            const pokemon = Pokemons[i];
            PokemonsList.innerHTML += ConvertPokemonToli(pokemon)
        }
    })  /* Aqui serve para repetir os pokemons, se tiver 30 pokemons lá na API vai repetir 30 pokemons no meu site */
    .catch((error) => console.log(error))   /* Se deu algum erro em qualquer etapa, mostra no console */