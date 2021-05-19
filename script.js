let fistGenPokemons= ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

let currentPokemon;
let idOfCurrentPokemon;
let url;


async function loadPokemon() {
    let selectedPokemon = document.getElementById('selectedPokemon').value.toLowerCase();
    url = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    idOfCurrentPokemon = currentPokemon['id'];

    await renderPokemonInfo(response);
    showPokemonpage();
    resetInputField();
}


async function renderPokemonInfo(response) {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonimage').src = currentPokemon['sprites']['other']['official-artwork']["front_default"];
    document.getElementById('number').innerHTML = idOfCurrentPokemon;
    document.getElementById('type').innerHTML = currentPokemon.types[0].type.name;
    document.getElementById('size').innerHTML = currentPokemon['height']/10;
    document.getElementById('weight').innerHTML = currentPokemon['weight']/10;
    document.getElementById('xp').innerHTML = currentPokemon['base_experience'];
    console.log(currentPokemon);
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

function resetInputField(){
    document.getElementById('selectedPokemon').value ='';
}

/////////////////////////////////////////////////////////////////////////////////////////