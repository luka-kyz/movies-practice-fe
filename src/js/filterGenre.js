export function filterByGenre(genre, movies) {
    const filteredMovies = movies.filter((movie) => {
        return movie.genre.includes(genre);
    })
    return filteredMovies
}