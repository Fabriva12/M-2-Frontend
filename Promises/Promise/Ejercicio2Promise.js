const myFirstPokemon = () => {
    const firstPokemon = fetch('https://pokeapi.co/api/v2/pokemon/dragonite')
        .then(response => response.json());
        return firstPokemon;
}
const mySecondPokemon = () => {
    const secondPokemon = fetch('https://pokeapi.co/api/v2/pokemon/gyarados')
        .then(response => response.json());
        return secondPokemon;
}

const myThirdPokemon = () => {
    const thirdPokemon = fetch('https://pokeapi.co/api/v2/pokemon/lugia')
        .then(response => response.json());
        return thirdPokemon;
}

const chosenPokemon = Promise.any([myFirstPokemon(), mySecondPokemon(), myThirdPokemon()]);
chosenPokemon.then(value => {
    console.log(value);
});