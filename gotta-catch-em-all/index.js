/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  // removes all previous content
  while (pokemonsContainer.firstChild) {
    pokemonsContainer.firstChild.remove();
  }

  for (const pokemon of pokemons) {
    const newElement = document.createElement("div");
    newElement.className = "pokemon";
    const pokemonName = document.createElement("h1");
    pokemonName.appendChild(document.createTextNode(pokemon.name));
    newElement.appendChild(pokemonName);

    const pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("src", pokemon.image);
    newElement.appendChild(pokemonImage);
    // adding pokemon to DOM
    pokemonsContainer.appendChild(newElement);
  }
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  const searchName = form.querySelector("input[id=pokemon-name]");
  const name = searchName.value;

  const result = pokemons.filter((pokemon) => {
    for (type of pokemon.types) {
      return activeFilters.includes(type) ? true : false;
    }
  });
  if (name.length !== 0) {
    return result.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(name.toLowerCase());
    });
  }
  return result;
}

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input[type=checkbox]");

const activeFilters = [];

function submitForm(event) {
  event.preventDefault();
  activeFilters.splice(0, activeFilters.length);
  for (input of inputs) {
    if (input.checked) {
      activeFilters.push(input.id);
    }
  }
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa

  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
