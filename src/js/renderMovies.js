export const renderMovies = (movies, container) => {
  if (!container) {
    console.error("контейнер не найден");
    return;
  }
  const markUp = `
     <ul class="movies-list">
${movies.reduce((acc, movie) => {
  return (acc += `
                  <li class="movies-item">
                <article class="movies-card">
                  <div class="movie-photo">
                    <img src="${movie.poster}" alt="${movie.title}" class="movie-img">
                  </div>
                  <div class="movie-item">
                    <p class="movie-title">${movie.title}</p>
                    <p class="movie-age">год: ${movie.year}</p>
                                        <p class="movie-text">описание: ${movie.description}</p>
                    <p class="movie-genre">жанр: ${movie.genre}</p>
                    <p class="movie-rating">рейтинг: ${movie.rating}</p>
                  </div>
                </article>
              </li>`);
}, "")}
            </ul>`;
  container.innerHTML = markUp;
};