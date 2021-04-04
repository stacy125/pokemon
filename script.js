let pokemonImg = [];
let pokemonInfo = [];
let pokemon = [];
let name = document.getElementById("update-name");
let nameFav = document.getElementById("update-fav-name");
let hp = document.getElementById("update-hp");
let hpFav = document.getElementById("update-fav-hp");
let xp = document.getElementById("update-xp");
let xpFav = document.getElementById("update-fav-xp");
let powers = document.getElementById("update-attributes");
let powersFav = document.getElementById("update-fav-attributes");
let height = document.getElementById("update-height");
let heightFav = document.getElementById("update-fav-height");
let weight = document.getElementById("update-weight");
let weightFav = document.getElementById("update-fav-weight");
let imagePoke = document.getElementById("update-img");
let imagefavPoke = document.getElementById("update-fav-img");

async function fetchPokemon(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const poke = await response.json();
  pokemonInfo.push(poke);
  pokemonImg.push(poke.sprites.front_default);
  console.log(poke);
  console.log(poke.sprites.front_default);
  imagePoke.src = poke.sprites.front_default;
  name.innerHTML = poke.name;
  hp.innerHTML = `HP ${poke.stats[0].base_stat}`;
  xp.innerHTML = `XP ${poke.base_experience}`;
  if (poke.types.length == 2) {
    powers.innerHTML = `${poke.types[0].type.name} / ${poke.types[1].type.name}`;
  } else {
    powers.innerHTML = `${poke.types[0].type.name}`;
  }
  weight.innerHTML = `${poke.weight}kg`;
  height.innerHTML = `${poke.height}cm`;
}

let input = document.getElementById("input");
let submit = document.querySelector(".submit");
submit.addEventListener("click", () => fetchPokemon(input.value));
submit.addEventListener("onTouch", () => fetchPokemon(input.value));
console.log("hello");

const favPokemon = [];

async function favorites() {
  const char = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
  const resChar = await char.json();
  favPokemon.push(resChar);
  const mt = await fetch("https://pokeapi.co/api/v2/pokemon/mewtwo");
  const resMt = await mt.json();
  favPokemon.push(resMt);
  const pika = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  const resPika = await pika.json();
  favPokemon.push(resPika);
  const squirt = await fetch("https://pokeapi.co/api/v2/pokemon/squirtle");
  const resSquirt = await squirt.json();
  favPokemon.push(resSquirt);
  const mw = await fetch("https://pokeapi.co/api/v2/pokemon/mew");
  const resMw = await mw.json();
  favPokemon.push(resMw);
  const eve = await fetch("https://pokeapi.co/api/v2/pokemon/eevee");
  const resEve = await eve.json();
  favPokemon.push(resEve);
  const bulb = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
  const resBulb = await bulb.json();
  favPokemon.push(resBulb);
  console.log(favPokemon[6].types[1].type.name);
}

favorites();

let next = document.querySelector(".next");

let counter = 0;

let listen = next.addEventListener("click", (e) => {
  e.target.preventDefault()
  nameFav.innerText = favPokemon[counter].name;
  imagefavPoke.src = favPokemon[counter].sprites.front_default;
  hpFav.innerHTML = `HP ${favPokemon[counter].stats[0].base_stat}`;
  xpFav.innerHTML = `XP ${favPokemon[counter].base_experience}`;
  weightFav.innerHTML = `${favPokemon[counter].weight}kg`;
  heightFav.innerText = `${favPokemon[counter].height}cm`;
  console.log(favPokemon[counter].stats[0].base_stat);
  console.log(favPokemon[counter]);
  if (favPokemon[counter].types.length == 2) {

      powersFav.innerHTML =
        `${favPokemon[counter].types[0].type.name} / 
        ${favPokemon[counter].types[1].type.name}`;
    
  } else {
    powersFav.innerHTML = `${favPokemon[counter].types[0].type.name}`;
  }

  counter++;
});
// console.log(`HP ${favPokemon[counter].stats[0].base_stat}`);

let previous = document.querySelector(".previous");

// let counter = 6;
previous.addEventListener("click", (e) => {
  e.target.preventDefault();
  if (counter <= 7) {
    counter--;
  }
let listener = next.addEventListener("onTouch", (e) => {
  e.target.preventDefault()
  nameFav.innerText = favPokemon[counter].name;
  imagefavPoke.src = favPokemon[counter].sprites.front_default;
  hpFav.innerHTML = `HP ${favPokemon[counter].stats[0].base_stat}`;
  xpFav.innerHTML = `XP ${favPokemon[counter].base_experience}`;
  weightFav.innerHTML = `${favPokemon[counter].weight}kg`;
  heightFav.innerText = `${favPokemon[counter].height}cm`;
  console.log(favPokemon[counter].stats[0].base_stat);
  console.log(favPokemon[counter]);
  if (favPokemon[counter].types.length == 2) {

      powersFav.innerHTML =
        `${favPokemon[counter].types[0].type.name} / 
        ${favPokemon[counter].types[1].type.name}`;
    
  } else {
    powersFav.innerHTML = `${favPokemon[counter].types[0].type.name}`;
  }

  counter++;
});

let previous = document.querySelector(".previous");


previous.addEventListener("click", (e) => {
  e.target.preventDefault();
  if (counter <= 7) {
    counter--;
  }

  nameFav.innerText = favPokemon[counter].name;
  imagefavPoke.src = favPokemon[counter].sprites.front_default;
  hpFav.innerText = `HP ${favPokemon[counter].stats[0].base_stat}`;
  xpFav.innerHTML = `XP ${favPokemon[counter].base_experience}`;
  weightFav.innerHTML = `${favPokemon[counter].weight}kg`;
  heightFav.innerText = `${favPokemon[counter].height}cm`;
  // console.log(index);

  if (favPokemon[counter].types.length == 2) {
    powersFav.innerHTML =
     ` ${favPokemon[counter].types[0].type.name} /
      ${favPokemon[counter].types[1].type.name}`
  } else {
    powersFav.innerHTML = favPokemon[counter].types[0].type.name;
  }
});
previous.addEventListener("onTouch", (e) => {
  e.target.preventDefault();
  if (counter <= 7) {
    counter--;
  }

  nameFav.innerText = favPokemon[counter].name;
  imagefavPoke.src = favPokemon[counter].sprites.front_default;
  hpFav.innerText = `HP ${favPokemon[counter].stats[0].base_stat}`;
  xpFav.innerHTML = `XP ${favPokemon[counter].base_experience}`;
  weightFav.innerHTML = `${favPokemon[counter].weight}kg`;
  heightFav.innerText = `${favPokemon[counter].height}cm`;
  // console.log(index);

  if (favPokemon[counter].types.length == 2) {
    powersFav.innerHTML =
     ` ${favPokemon[counter].types[0].type.name} /
      ${favPokemon[counter].types[1].type.name}`
  } else {
    powersFav.innerHTML = favPokemon[counter].types[0].type.name;
  }
});
