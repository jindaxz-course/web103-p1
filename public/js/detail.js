async function loadVenueDetail() {
    const venueId = window.location.pathname.split('/').pop();

    try {
        const response = await fetch(`/api/venues/${venueId}`);

        if (!response.ok) {
            throw new Error('Venue not found');
        }

        const venue = await response.json();
        displayVenueDetail(venue);
    } catch (error) {
        console.error('Error loading venue:', error);
        document.getElementById('venue-detail').innerHTML = '<p>Error loading venue details. Please try again later.</p>';
    }
}

function displayVenueDetail(venue) {
    const container = document.getElementById('venue-detail');

    const upcomingEventsHtml = venue.upcomingEvents.map(event => `
        <li>
            <strong>${event.artist}</strong><br>
            📅 ${new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}<br>
            💵 ${event.price}
        </li>
    `).join('');

    const amenitiesHtml = venue.amenities.map(amenity => `
        <span class="amenity-tag">${amenity}</span>
    `).join('');

    container.innerHTML = `
        <div class="venue-header">
            <img src="${venue.image}" alt="${venue.name}">
            <h1>${venue.name}</h1>
            <div class="venue-badges">
                <span class="badge">${venue.type}</span>
                <span class="badge">⭐ ${venue.rating} Rating</span>
                <span class="badge">👥 ${venue.capacity.toLocaleString()} Capacity</span>
            </div>
            <p>${venue.description}</p>
        </div>

        <div class="detail-grid">
            <div class="detail-section">
                <h3>📍 Location & Contact</h3>
                <p><strong>Address:</strong> ${venue.address}, ${venue.location}</p>
                <p><strong>Phone:</strong> ${venue.phone}</p>
                <p><strong>Website:</strong> <a href="https://${venue.website}" target="_blank">${venue.website}</a></p>
                <p><strong>Hours:</strong> ${venue.hours}</p>
            </div>

            <div class="detail-section">
                <h3>🎵 Music & Pricing</h3>
                <p><strong>Genres:</strong> ${venue.genre}</p>
                <p><strong>Price Range:</strong> ${venue.priceRange}</p>
                <p><strong>Venue Capacity:</strong> ${venue.capacity.toLocaleString()} people</p>
            </div>
        </div>

        <div class="detail-section">
            <h3>🎸 Upcoming Events</h3>
            <ul class="events-list">
                ${upcomingEventsHtml}
            </ul>
        </div>

        <div class="detail-section">
            <h3>✨ Amenities</h3>
            <div class="amenities-grid">
                ${amenitiesHtml}
            </div>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
            <a href="/" role="button">← Back to All Venues</a>
        </div>
    `;

    document.title = `${venue.name} - Local Music Venues`;
}

document.addEventListener('DOMContentLoaded', loadVenueDetail);