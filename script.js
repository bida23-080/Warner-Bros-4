document.addEventListener('DOMContentLoaded', function() {
    // Get all movie listings
    const movieList = document.querySelector('#movies .movie-list');

    // Simulated movie data (replace with actual data if available)
    const movies = [
        { title: 'Movie Title 1', description: 'Description of Movie 1...', imageUrl: 'movie1.jpg' },
        { title: 'Movie Title 2', description: 'Description of Movie 2...', imageUrl: 'movie2.jpg' }
        // Add more movie objects as needed
    ];

    // Display movie listings
    movies.forEach(movie => {
        const movieElement = createMovieElement(movie);
        movieList.appendChild(movieElement);
    });

    // Helper function to create movie listing element
    function createMovieElement(movie) {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const image = document.createElement('img');
        image.src = movie.imageUrl;
        image.alt = movie.title;
        movieDiv.appendChild(image);

        const title = document.createElement('h3');
        title.textContent = movie.title;
        movieDiv.appendChild(title);

        const description = document.createElement('p');
        description.textContent = movie.description;
        movieDiv.appendChild(description);

        // Add click event listener to display more information (e.g., alert)
        movieDiv.addEventListener('click', function() {
            alert(`${movie.title}: ${movie.description}`);
        });

        return movieDiv;
    }

    // Similarly, you can implement functionality for other sections (TV Shows, News, Shop)...

    // Get all TV show listings
    const tvShowList = document.querySelector('#tvshows .tvshow-list');

    // Simulated TV show data
    const tvShows = [
        { title: 'TV Show Title 1', description: 'Description of TV Show 1...', imageUrl: 'tvshow1.jpg' },
        { title: 'TV Show Title 2', description: 'Description of TV Show 2...', imageUrl: 'tvshow2.jpg' }
        // Add more TV show objects as needed
    ];

    // Display TV show listings
    tvShows.forEach(tvShow => {
        const tvShowElement = createTvShowElement(tvShow);
        tvShowList.appendChild(tvShowElement);
    });

    // Helper function to create TV show listing element
    function createTvShowElement(tvShow) {
        // Similar logic as createMovieElement function
    }

    // Implement functionality for News and Shop sections in a similar manner...
});
