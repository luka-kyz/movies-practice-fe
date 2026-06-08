import movies from "./data.js";
import { renderMovies } from "./renderMovies.js";
import { sortMovies } from "./sort.js";
import { searchMovies } from "./search.js";
import { filterByGenre } from "./filterGenre.js";

const moviesContainer = document.querySelector("[data-movies]");
const sortSelect = document.querySelector("[data-sort]");
const search = document.querySelector("[data-search]");

renderMovies(movies, moviesContainer);

// sorted
function handleSorted(event) {
  const query = event.target.value;

  const sortedMovies = sortMovies(query, movies);
console.clear()
  console.log(sortedMovies);

  renderMovies(sortedMovies, moviesContainer);
}

sortSelect.addEventListener("change", handleSorted);

// search
function handleSearch(event) {
  const query = event.target.value.trim().toLowerCase();

  const searchedFilms = searchMovies(query, movies);

  console.log(` новый запрос
    : ${query}`);

  renderMovies(searchedFilms, moviesContainer);
}

search.addEventListener("input", handleSearch);

// filterByGenre
const buttonsDiv = document.querySelector("[data-filter]")
function handleFilterByGenre(event) {
    if (event.target.tagName === "BUTTON") {
        const genre = event.target.dataset.ganre 
        const filteredGenre = filterByGenre(genre, movies)
        renderMovies(filteredGenre, moviesContainer);
    }
}
buttonsDiv.addEventListener("click", handleFilterByGenre)
 