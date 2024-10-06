document.getElementById('search-btn').addEventListener('click', function() {
    const movieTitle = document.getElementById('movie-input').value;
    const apiKey = '8efd2a49'; // Replace with your OMDB API key
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const movieDetails = document.getElementById('movie-details');
            if (data.Response === 'True') {
                movieDetails.innerHTML = `
                    <h2>${data.Title} (${data.Year})</h2>
                    <img src="${data.Poster !== 'N/A' ? data.Poster : 'placeholder-image.jpg'}" alt="${data.Title} Poster" />
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                `;
            } else {
                movieDetails.innerHTML = `<p>${data.Error}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('movie-details').innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
});
