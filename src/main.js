import data from './data/pokemon/pokemon.js';
import { ordenarAaZ, buscarTipo, porNome, resultado } from './data.js';

const pokemonGo = data.pokemon;
const cards = document.getElementById("cards");

function showingCards(pokemonGo) {

    cards.innerHTML = "";

    for (let pokemon of pokemonGo) {

        var dados = document.createElement("div")
        dados.className = "div-filha";

        dados.innerHTML += `
            <p class="Titulo-card"> ${pokemon.name}<p>
            <h3><p class="classe-card">Type: </p>${pokemon.type}</h3>
            <h3><p class="classe-card">Eggs: </p>${pokemon.egg}</h3>
            <h3><p class="classe-card">Weaknesses: </p>${pokemon.weaknesses.join(", ")}</h3>
            <img class = "imagem" src = ${pokemon.img} >`

        cards.appendChild(dados);

    }
}

showingCards(pokemonGo);

document.getElementById("ordem").onchange = () => {

    const filtroOrdem = document.getElementById("ordem").value;
    const listaOrdem = (ordenarAaZ(pokemonGo, filtroOrdem));
    document.getElementById("results").innerHTML = "";
    showingCards(listaOrdem);
}

document.getElementById("tipo").onchange = () => {

    const filtroTipo = document.getElementById("tipo").value;
    const listaTipo = (buscarTipo(pokemonGo, filtroTipo));
    const calculo = (resultado(pokemonGo.length, filtroTipo.length).toFixed(2));
    document.getElementById("results").innerHTML =
        `<p>Pokémons do tipo ${filtroTipo} são ${calculo} % dos Pokémons.</p>`;
    showingCards(listaTipo);
}

document.getElementById("btn").onclick = (event) => {
    event.preventDefault()

    const pokeName = document.getElementById("nome").value;
    const novoPokemon = (porNome(pokemonGo, pokeName))
    document.getElementById("results").innerHTML = "";
    showingCards(novoPokemon);
};

showingCards;