import movies from "./data.js"
import { renderMovies } from "./renderMovies.js"
const moviesContainer = document.querySelector("[data-movies]");
renderMovies(moviesContainer, movies)