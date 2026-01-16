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
const data = Promise.all([myFirstPokemon(), mySecondPokemon(), myThirdPokemon()]);
data.then(values => {
    console.log(values);
});
