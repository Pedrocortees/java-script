const pokemonList = document.getElementById('pokemonList')

function convertPokemonToLi(pokemon) {

    const types = pokemon.types.map(typeInfo => typeInfo.type.name)
    const mainType = types[0]

    return `
        <li class="pokemon ${mainType}">
            <span class="number">#${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${types.map(type => 
                        `<li class="type ${type}">${type}</li>`
                    ).join('')}
                </ol>

                <img src="${pokemon.sprites.other['dream_world'].front_default}" 
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

pokeApi.getPokemons()
    .then((pokemons) => {
        const detailsPromises = pokemons.map(pokemon =>
            fetch(pokemon.url).then(response => response.json())
        )
        return Promise.all(detailsPromises)
    })
    .then((pokemonDetails) => {
        pokemonList.innerHTML = pokemonDetails
            .map(convertPokemonToLi)
            .join('')
    })
    .catch((error) => console.error(error))