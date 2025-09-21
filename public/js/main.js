let allVenues = [];
let filteredVenues = [];

async function loadVenues() {
    try {
        const response = await fetch('/api/venues');
        allVenues = await response.json();
        filteredVenues = [...allVenues];
        displayVenues(filteredVenues);
    } catch (error) {
        console.error('Error loading venues:', error);
        document.getElementById('venues-grid').innerHTML = '<p>Error loading venues. Please try again later.</p>';
    }
}

function displayVenues(venues) {
    const container = document.getElementById('venues-grid');

    if (venues.length === 0) {
        container.innerHTML = '<p>No venues found matching your criteria.</p>';
        return;
    }

    container.innerHTML = venues.map(venue => `
        <article class="venue-card" onclick="navigateToVenue('${venue.id}')">
            <img src="${venue.image}" alt="${venue.name}" loading="lazy">
            <div class="card-content">
                <h3>${venue.name}</h3>
                <span class="venue-type">${venue.type}</span>
                <div class="venue-info">
                    <span>📍 ${venue.location}</span>
                    <span>🎵 ${venue.genre}</span>
                    <span>👥 Capacity: ${venue.capacity.toLocaleString()}</span>
                    <span>💵 ${venue.priceRange}</span>
                    <span class="rating">⭐ ${venue.rating}</span>
                </div>
            </div>
        </article>
    `).join('');
}

function navigateToVenue(venueId) {
    window.location.href = `/venues/${venueId}`;
}

function filterVenues() {
    const genreFilter = document.getElementById('genreFilter').value.toLowerCase();
    const capacityFilter = document.getElementById('capacityFilter').value;

    filteredVenues = allVenues.filter(venue => {
        let matchesGenre = true;
        let matchesCapacity = true;

        if (genreFilter) {
            matchesGenre = venue.genre.toLowerCase().includes(genreFilter);
        }

        if (capacityFilter) {
            if (capacityFilter === 'small') {
                matchesCapacity = venue.capacity < 200;
            } else if (capacityFilter === 'medium') {
                matchesCapacity = venue.capacity >= 200 && venue.capacity <= 1000;
            } else if (capacityFilter === 'large') {
                matchesCapacity = venue.capacity > 1000;
            }
        }

        return matchesGenre && matchesCapacity;
    });

    displayVenues(filteredVenues);
}

document.addEventListener('DOMContentLoaded', () => {
    loadVenues();

    document.getElementById('genreFilter').addEventListener('change', filterVenues);
    document.getElementById('capacityFilter').addEventListener('change', filterVenues);
});