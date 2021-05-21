let currentPokemon;
let idOfCurrentPokemon;
let url;
let selectedPokemon;
let pokemons;
let pokemonsArray = [];
let list;


async function init() {
    getAllPokemons();
    showStartscreen();
}

async function getAllPokemons() {
    let pokemonsUrl = `https://pokeapi.co/api/v2/pokemon/?limit=1118`;
    let responseOfAll = await fetch(pokemonsUrl);
    pokemons = await responseOfAll.json();
    pokemons = await pokemons.results;
    console.log(pokemons);
    fillPokemonArray(pokemons);
}

async function fillPokemonArray() {
    for (let i = 0; i < 1118; i++) {
        document.getElementById('pokemons-list').innerHTML += `<li>${pokemons[i].name}</li>`;
        pokemonsArray.push(pokemons[i].name);
    }
}

function filterNames() {
    let search = document.getElementById('selectedPokemon').value.toLowerCase();
    list = document.getElementById('pokemons-list');
    list.innerHTML = '';

    for (let i = 0; i < pokemons.length; i++) {
        let name = pokemons[i].name;
        if (name.toLowerCase().includes(search)) {
            list.innerHTML += `<li>${name}</li>`;
        }
    }
    if (list.innerHTML == '') {
        list.innerHTML = `<h10>Keine Vorschläge vorhanden</h10>`;
    }
}

async function loadPokemon() {
    selectedPokemon = await document.getElementById('selectedPokemon').value.toLowerCase();
    let idFromInput = await document.getElementById('selectedPokemon').value;
    url = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;

    if (pokemonsArray.includes(selectedPokemon) | idFromInput ==1) {
        let response = await fetch(url);
        currentPokemon = await response.json();
        idOfCurrentPokemon = await currentPokemon['id'];
        await renderPokemonInfo();
        showPokemonpage();
        resetInputField();
    } else {
        alert('pokemon wurde nicht gefunden.');
    }
}

async function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonimage').src = currentPokemon['sprites']['other']['official-artwork']["front_default"];
    document.getElementById('number').innerHTML = idOfCurrentPokemon;
    document.getElementById('type').innerHTML = '';
    for (let i = 0; i < currentPokemon.types.length; i++) {
        document.getElementById('type').innerHTML += currentPokemon.types[i].type.name + ' ';
    }
    document.getElementById('size').innerHTML = currentPokemon['height'] / 10;
    document.getElementById('weight').innerHTML = currentPokemon['weight'] / 10;
    document.getElementById('xp').innerHTML = currentPokemon['base_experience'];
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

function resetInputField() {
    document.getElementById('selectedPokemon').value = '';
    filterNames();
}

/////////////////////////////////////////////////////////////////////////////////////////