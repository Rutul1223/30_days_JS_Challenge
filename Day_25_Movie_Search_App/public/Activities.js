/* Activity -> 1 : Setting Up the Project */

// Task_1 - Initialize a new project directory and set up the basic HTML structure for the movie search app.

// Answer :- Explore index.html file

// Task_2 - Add a basic CSS file to style the movie search app, including a container for displaying movie search results.

// Answer :- Explore styles.css file

/* Activity -> 2 : Fetching Movie Data */

// Task_3 - Use the 'fetch' API to get movie data from a public movie API (e.g.,OMDB API or The Movie Database API) Log the response data to console.

// document.getElementById('search-button').addEventListener('click', async () => {
//     const query = document.getElementById('search-input').value;
//     if (query) {
//         await searchMovies(query);
//     } else {
//         alert('Please enter a search term');
//     }
// });

// const getApiKey = async () => {
//     try {
//         const response = await fetch('/api/key');
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         return data.apiKey;
//     } catch (error) {
//         console.error('Error fetching API key:', error);
//     }
// };

// const searchMovies = async (query) => {
//     const apiKey = await getApiKey();
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         displayResults(data.results);
//     } catch (error) {
//         console.error('Error fetching movie data:', error);
//     }
// };

// const displayResults = (movies) => {
//     const resultsContainer = document.querySelector('.results');
//     resultsContainer.innerHTML = '';

//     movies.forEach(movie => {
//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');

//         movieElement.innerHTML = `
//             <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
//             <h2>${movie.title}</h2>
//             <p>${movie.overview}</p>
//         `;

//         resultsContainer.appendChild(movieElement);
//     });
// };

// // Fetch the API key when the page loads
// getApiKey();

// Task_4 - Parse the movie data and display the movie title, poster and release year on the web page.

// document.getElementById('search-button').addEventListener('click', async () => {
//     const query = document.getElementById('search-input').value;
//     if (query) {
//         const apiKey = await fetchApiKey();
//         fetchMovieData(query, apiKey);
//     } else {
//         alert('Please enter a search term');
//     }
// });

// async function fetchApiKey() {
//     try {
//         const response = await fetch('/api/key');
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         return data.apiKey;
//     } catch (error) {
//         console.error('Error fetching API key:', error);
//     }
// }

// async function fetchMovieData(query, apiKey) {
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         displayResults(data.results);
//     } catch (error) {
//         console.error('Error fetching movie data:', error);
//     }
// }

// function displayResults(movies) {
//     const resultsContainer = document.querySelector('.results');
//     resultsContainer.innerHTML = '';

//     movies.forEach(movie => {
//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');

//         const posterPath = movie.poster_path
//             ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
//             : 'placeholder-image-url'; // Provide a placeholder image URL

//         movieElement.innerHTML = `
//             <img src="${posterPath}" alt="${movie.title}">
//             <h2>${movie.title}</h2>
//             <p>Release Year: ${movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</p>
//         `;

//         resultsContainer.appendChild(movieElement);
//     });
// }

// Fetch the API key when the page loads
// fetchApiKey();

/* Activity -> 3 : Adding Search Functionality */

// Task_5 - Add an input field and a search button to the HTML structure. Style the input and button using CSS.

// Answer :- Explore styles.css file

// Task_6 - Write a function to fetch and display movie data based on a search query entered in the input field. Log any errors to the console.

// Answer :- Refer Task-4 is same

/* Activity -> 4 : Displaying Detailed Movie Information */

// Task_7 - Modify the search results to include a "More Info" button for each movie. When clicked, fetch and display additional details about the movie, such as the plot, director and actor.

// document.getElementById('search-button').addEventListener('click', async () => {
//     const query = document.getElementById('search-input').value;
//     if (query) {
//         await searchMovies(query);
//     } else {
//         alert('Please enter a search term');
//     }
// });

// const getApiKey = async () => {
//     try {
//         const response = await fetch('/api/key');
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         return data.apiKey;
//     } catch (error) {
//         console.error('Error fetching API key:', error);
//     }
// };

// const searchMovies = async (query) => {
//     const apiKey = await getApiKey();
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         displayResults(data.results);
//     } catch (error) {
//         console.error('Error fetching movie data:', error);
//     }
// };

// const fetchMovieDetails = async (movieId, apiKey) => {
//     const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error('Error fetching movie details:', error);
//     }
// };

// const displayResults = (movies) => {
//     const resultsContainer = document.querySelector('.results');
//     resultsContainer.innerHTML = '';

//     movies.forEach(movie => {
//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');

//         movieElement.innerHTML = `
//             <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
//             <h2>${movie.title}</h2>
//             <button class="more-info" data-id="${movie.id}">More Info</button>
//             <div class="movie-details" id="details-${movie.id}" style="display:none;">
//                 <!-- Additional details will be inserted here -->
//             </div>
//         `;

//         resultsContainer.appendChild(movieElement);
//     });

//     document.querySelectorAll('.more-info').forEach(button => {
//         button.addEventListener('click', async (event) => {
//             const movieId = event.target.getAttribute('data-id');
//             const apiKey = await getApiKey();
//             const details = await fetchMovieDetails(movieId, apiKey);
//             displayMovieDetails(movieId, details);
//         });
//     });
// };

// const displayMovieDetails = (movieId, details) => {
//     const director = details.credits.crew.find(member => member.job === 'Director');
//     const actors = details.credits.cast.map(actor => actor.name).join(', ');

//     const detailsContainer = document.getElementById(`details-${movieId}`);
//     detailsContainer.innerHTML = `
//         <p><strong>Plot:</strong> ${details.overview}</p>
//         <p><strong>Release Date:</strong> ${details.release_date}</p>
//         <p><strong>Director:</strong> ${director ? director.name : 'N/A'}</p>
//         <p><strong>Actors:</strong> ${actors}</p>
//     `;
//     detailsContainer.style.display = 'block';
// };

// Task_8 - Create a modal or a new section on the page to display the detailed movie information.

// document.getElementById('search-button').addEventListener('click', async () => {
//     const query = document.getElementById('search-input').value;
//     if (query) {
//         await searchMovies(query);
//     } else {
//         alert('Please enter a search term');
//     }
// });

// const getApiKey = async () => {
//     try {
//         const response = await fetch('/api/key');
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         return data.apiKey;
//     } catch (error) {
//         console.error('Error fetching API key:', error);
//     }
// };

// const searchMovies = async (query) => {
//     const apiKey = await getApiKey();
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         displayResults(data.results);
//     } catch (error) {
//         console.error('Error fetching movie data:', error);
//     }
// };

// const fetchMovieDetails = async (movieId, apiKey) => {
//     const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error('Error fetching movie details:', error);
//     }
// };

// const displayResults = (movies) => {
//     const resultsContainer = document.querySelector('.results');
//     resultsContainer.innerHTML = '';

//     movies.forEach(movie => {
//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');

//         movieElement.innerHTML = `
//             <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
//             <h2>${movie.title}</h2>
//             <button class="more-info" data-id="${movie.id}">More Info</button>
//         `;

//         resultsContainer.appendChild(movieElement);
//     });

//     document.querySelectorAll('.more-info').forEach(button => {
//         button.addEventListener('click', async (event) => {
//             const movieId = event.target.getAttribute('data-id');
//             const apiKey = await getApiKey();
//             const details = await fetchMovieDetails(movieId, apiKey);
//             displayMovieDetails(details);
//         });
//     });
// };

// const displayMovieDetails = (details) => {
//     const director = details.credits.crew.find(member => member.job === 'Director');
//     const actors = details.credits.cast.map(actor => actor.name).join(', ');

//     const modalBody = document.getElementById('modal-body');
//     modalBody.innerHTML = `
//         <h2>${details.title}</h2>
//         <img src="https://image.tmdb.org/t/p/w300${details.poster_path}" alt="${details.title}">
//         <p><strong>Plot:</strong> ${details.overview}</p>
//         <p><strong>Release Date:</strong> ${details.release_date}</p>
//         <p><strong>Director:</strong> ${director ? director.name : 'N/A'}</p>
//         <p><strong>Actors:</strong> ${actors}</p>
//     `;

//     // Display the modal
//     const modal = document.getElementById('movie-modal');
//     modal.style.display = 'block';

//     // Close the modal when the user clicks on <span> (x)
//     document.querySelector('.close').onclick = () => {
//         modal.style.display = 'none';
//     };

//     // Close the modal when the user clicks anywhere outside of the modal
//     window.onclick = (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     };
// };

// // Fetch the API key when the page loads
// getApiKey();

/* Activity -> 5 : Enhancing the UI */

// Task_9 - Add CSS styles to improve the layout and design of the search results and detailed movie information.

// Answer :- Explore styles.css file

// Task_10 - Add CSS animations or transitions to make the movie search app more interactive and visually appealing.

document.getElementById('search-button').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value;
    if (query) {
        await searchMovies(query);
    } else {
        alert('Please enter a search term');
    }
});

document.getElementById('search-input').addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        const query = document.getElementById('search-input').value;
        if (query) {
            await searchMovies(query);
        } else {
            alert('Please enter a search term');
        }
    }
});

const getApiKey = async () => {
    try {
        const response = await fetch('/api/key');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data.apiKey;
    } catch (error) {
        console.error('Error fetching API key:', error);
    }
};

const searchMovies = async (query) => {
    const apiKey = await getApiKey();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        displayResults(data.results);
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
};

const fetchMovieDetails = async (movieId, apiKey) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
};

const displayResults = (movies) => {
    const resultsContainer = document.querySelector('.results');
    resultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <button class="more-info" data-id="${movie.id}">More Info</button>
        `;

        resultsContainer.appendChild(movieElement);
    });

    document.querySelectorAll('.more-info').forEach(button => {
        button.addEventListener('click', async (event) => {
            const movieId = event.target.getAttribute('data-id');
            const apiKey = await getApiKey();
            const details = await fetchMovieDetails(movieId, apiKey);
            displayMovieDetails(details);
        });
    });
};

const displayMovieDetails = (details) => {
    const director = details.credits.crew.find(member => member.job === 'Director');
    const actors = details.credits.cast.map(actor => actor.name).join(', ');

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2>${details.title}</h2>
        <img src="https://image.tmdb.org/t/p/w300${details.poster_path}" alt="${details.title}">
        <p><strong>Plot:</strong> ${details.overview}</p>
        <p><strong>Release Date:</strong> ${details.release_date}</p>
        <p><strong>Director:</strong> ${director ? director.name : 'N/A'}</p>
        <p><strong>Actors:</strong> ${actors}</p>
    `;

    // Display the modal
    const modal = document.getElementById('movie-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent body scroll

    // Close the modal when the user clicks on <span> (x)
    document.querySelector('.close').onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore body scroll
    };

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore body scroll
        }
    };
};

// Fetch the API key when the page loads
getApiKey();