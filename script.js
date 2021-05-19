let currentPokemon;

async function loadPokemon() {
    let pokemon = document.getElementById('selectedPokemon').nodeValue;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    let response = await fetch(url);
    currentPokemon = await response.json();

    renderPokemonInfo(response);
    console.log(currentPokemon);
}

async function renderPokemonInfo(response) {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonimage').src = currentPokemon['sprites']['other']['official-artwork']["front_default"];
}

/////////////////////////////////////////////////////////////////////////////////////////

function showStartscreen() {
    document.getElementById('pokemonpage').classList.add('dnone');
    document.getElementById('startscreen').classList.remove('dnone');
}


function showPokemonpage() {
    document.getElementById('startscreen').classList.add('dnone');
    document.getElementById('pokemonpage').classList.remove('dnone');
}

///////////////////////////////////////////////////////////////////////////////////////////