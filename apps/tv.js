export const tvHtml = `
<div class="tv-app-container">
    <div class="tv-hero-section">
        <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Featured Content" class="hero-image">
        <div class="hero-overlay">
            <h2 class="hero-title">The Grand Adventure</h2>
            <p class="hero-description">An epic journey across mystical lands, facing ancient evils and forging new destinies.</p>
            <div class="hero-buttons">
                <button class="play-button"><i class="fa fa-play"></i> Play</button>
                <button class="info-button"><i class="fa fa-info-circle"></i> Info</button>
            </div>
        </div>
    </div>

    <div class="tv-content-rows">
        <div class="content-row">
            <h3>Continue Watching</h3>
            <div class="content-cards-wrapper">
                <div class="content-card">
                    <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Show 1">
                    <p class="card-title">Mystery of the Lost City</p>
                </div>
                <div class="content-card">
                    <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Show 2">
                    <p class="card-title">Cosmic Frontiers</p>
                </div>
                <div class="content-card">
                    <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Show 3">
                    <p class="card-title">The Last Stand</p>
                </div>
                <div class="content-card">
                    <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Show 4">
                    <p class="card-title">Echoes of Time</p>
                </div>
                <div class="content-card">
                    <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Show 5">
                    <p class="card-title">Galactic Odyssey</p>
                </div>
            </div>
        </div>

        <div class="content-row">
            <h3>Recommended for You</h3>
            <div class="content-cards-wrapper">
                <div class="content-card">
                    <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Movie 1">
                    <p class="card-title">The Silent Witness</p>
                </div>
                <div class="content-card">
                    <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Movie 2">
                    <p class="card-title">Beyond the Horizon</p>
                </div>
                <div class="content-card">
                    <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Movie 3">
                    <p class="card-title">City of Shadows</p>
                </div>
                <div class="content-card">
                    <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Movie 4">
                    <p class="card-title">The Forgotten Realm</p>
                </div>
                <div class="content-card">
                    <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Movie 5">
                    <p class="card-title">Starfall</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

export const tvCss = `
.tv-app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #1a1a1a, #0a0a0a);
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-y: auto; /* Allow scrolling for content rows */
    border-radius: inherit;
}

.tv-hero-section {
    position: relative;
    width: 100%;
    height: 40%; /* Adjust as needed */
    min-height: 200px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(0.6); /* Darken image for text readability */
}

.hero-overlay {
    position: relative;
    z-index: 1;
    padding: 20px 30px;
    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)); /* Gradient for text readability */
    width: 100%;
}

.hero-title {
    font-size: clamp(1.8em, 4vw, 2.8em);
    margin-bottom: 10px;
    font-weight: 700;
}

.hero-description {
    font-size: clamp(0.9em, 2vw, 1.1em);
    color: #ccc;
    margin-bottom: 15px;
    max-width: 70%;
}

.hero-buttons {
    display: flex;
    gap: 15px;
}

.play-button, .info-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.play-button {
    background-color: #e50914; /* Netflix red */
    color: #fff;
}

.play-button:hover {
    background-color: #ff0a16;
    transform: scale(1.02);
}

.info-button {
    background-color: rgba(255,255,255,0.2);
    color: #fff;
}

.info-button:hover {
    background-color: rgba(255,255,255,0.3);
    transform: scale(1.02);
}

.tv-content-rows {
    flex-grow: 1;
    padding: 20px 0;
}

.content-row {
    margin-bottom: 25px;
}

.content-row h3 {
    font-size: 1.5em;
    margin-left: 30px;
    margin-bottom: 15px;
    font-weight: 600;
}

.content-cards-wrapper {
    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling */
    padding: 0 30px;
    gap: 15px;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    scrollbar-width: none; /* Hide scrollbar for Firefox */
}

.content-cards-wrapper::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, Opera */
}

.content-card {
    flex-shrink: 0; /* Prevent cards from shrinking */
    width: 150px; /* Fixed width for cards */
    background-color: #2a2a2a;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.content-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.5);
}

.content-card img {
    width: 100%;
    height: 200px; /* Fixed height for poster images */
    object-fit: cover;
    border-bottom: 1px solid #3a3a3a;
}

.content-card .card-title {
    padding: 10px;
    font-size: 0.9em;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
`;