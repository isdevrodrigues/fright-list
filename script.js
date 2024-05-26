// app.js
document.addEventListener('DOMContentLoaded', () => {
    const movieListElement = document.getElementById('movie-list');

    async function fetchMovies() {
        try {
            const response = await fetch('movies.json');
            const movies = await response.json();
            renderMovies(movies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    function renderMovies(movies) {
        const movieCountElement = document.createElement('h3');
        movieCountElement.textContent = `# of movies: ${movies.length}`;
        movieCountElement.style.textAlign = 'center';
        movieListElement.appendChild(movieCountElement);

        const lastUpdateElement = document.createElement('h3');
        lastUpdateElement.textContent = 'Last update: 2024-05-25';
        lastUpdateElement.style.textAlign = 'center';
        movieListElement.appendChild(lastUpdateElement);

        movies.forEach(movie => {
            const movieItemElement = createMovieItem(movie);
            movieListElement.appendChild(movieItemElement);
        });
    }

    function createMovieItem(movie) {
        const movieItemElement = document.createElement('div');
        movieItemElement.className = 'movie-item';

        const imgElement = document.createElement('img');
        imgElement.src = movie.posterLink;
        imgElement.alt = `${movie.title} poster`;
        movieItemElement.appendChild(imgElement);

        const contentElement = document.createElement('div');
        contentElement.className = 'content';

        const titleElement = document.createElement('h2');
        titleElement.textContent = movie.title;
        contentElement.appendChild(titleElement);

        const releaseDateElement = document.createElement('h3');
        releaseDateElement.className = 'release-date';
        releaseDateElement.textContent = movie.releaseDate;
        contentElement.appendChild(releaseDateElement);

        const buttonElement = document.createElement('p');
        buttonElement.className = 'letterboxd-button';
        const linkElement = document.createElement('a');
        linkElement.href = movie.externalLink;
        linkElement.target = '_blank';
        linkElement.textContent = 'Letterboxd';
        buttonElement.appendChild(linkElement);
        contentElement.appendChild(buttonElement);

        movieItemElement.appendChild(contentElement);

        return movieItemElement;
    }

    fetchMovies();
});
