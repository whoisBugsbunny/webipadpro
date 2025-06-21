export const shortcutsHtml = `
<div class="shortcuts-app-container">
    <header class="shortcuts-header">
        <h1>My Shortcuts</h1>
    </header>
    <div class="shortcuts-grid">
        <div class="shortcut-card" data-shortcut-id="open-calculator">
            <div class="shortcut-icon" style="background-color: #fe9500;"><i class="fa fa-calculator"></i></div>
            <h3 class="shortcut-title">Open Calculator</h3>
            <p class="shortcut-description">Perform quick calculations.</p>
        </div>
        <div class="shortcut-card" data-shortcut-id="play-music">
            <div class="shortcut-icon" style="background-color: #fd355a;"><i class="fa fa-music"></i></div>
            <h3 class="shortcut-title">Play Music</h3>
            <p class="shortcut-description">Start your favorite tunes.</p>
        </div>
        <div class="shortcut-card" data-shortcut-id="view-reminders">
            <div class="shortcut-icon" style="background-color: #ff9500;"><i class="fa fa-list-ul"></i></div>
            <h3 class="shortcut-title">View Reminders</h3>
            <p class="shortcut-description">Check your to-do list.</p>
        </div>
        <div class="shortcut-card" data-shortcut-id="check-stocks">
            <div class="shortcut-icon" style="background-color: #000;"><i class="fa fa-chart-line"></i></div>
            <h3 class="shortcut-title">Check Stocks</h3>
            <p class="shortcut-description">Monitor market trends.</p>
        </div>
        <div class="shortcut-card" data-shortcut-id="browse-books">
            <div class="shortcut-icon" style="background-color: #f7701d;"><i class="fa fa-book"></i></div>
            <h3 class="shortcut-title">Browse Books</h3>
            <p class="shortcut-description">Explore your library.</p>
        </div>
        <div class="shortcut-card" data-shortcut-id="launch-tv">
            <div class="shortcut-icon" style="background-color: #e50914;"><i class="fa fa-tv"></i></div>
            <h3 class="shortcut-title">Launch TV App</h3>
            <p class="shortcut-description">Watch movies & shows.</p>
        </div>
        <div class="shortcut-card" data-shortcut-id="open-appstore">
            <div class="shortcut-icon" style="background-color: #1d6ff2;"><i class="fa fa-store"></i></div>
            <h3 class="shortcut-title">Open App Store</h3>
            <p class="shortcut-description">Discover new apps.</p>
        </div>
        <div class="shortcut-card" data-shortcut-id="go-to-github">
            <div class="shortcut-icon" style="background-color: #24292e;"><i class="fa fa-github"></i></div>
            <h3 class="shortcut-title">Go to GitHub</h3>
            <p class="shortcut-description">Access your repositories.</p>
        </div>
        <div class="shortcut-card" data-shortcut-id="open-w3schools">
            <div class="shortcut-icon" style="background-color: #4CAF50;"><i class="fa fa-code"></i></div>
            <h3 class="shortcut-title">Open W3Schools</h3>
            <p class="shortcut-description">Learn web development.</p>
        </div>
        <div class="shortcut-card" data-shortcut-id="search-google">
            <div class="shortcut-icon" style="background-color: #4285F4;"><i class="fa fa-google"></i></div>
            <h3 class="shortcut-title">Search Google</h3>
            <p class="shortcut-description">Find anything online.</p>
        </div>
        <div class="shortcut-card" data-shortcut-id="take-note">
            <div class="shortcut-icon" style="background-color: #FBC02D;"><i class="fa fa-sticky-note"></i></div>
            <h3 class="shortcut-title">Take a Note</h3>
            <p class="shortcut-description">Jot down quick ideas.</p>
        </div>
        <div class="shortcut-card" data-shortcut-id="set-alarm">
            <div class="shortcut-icon" style="background-color: #00BCD4;"><i class="fa fa-bell"></i></div>
            <h3 class="shortcut-title">Set Alarm</h3>
            <p class="shortcut-description">Wake up on time.</p>
        </div>
    </div>
</div>
`;

export const shortcutsCss = `
.shortcuts-app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #f5f5f7;
    color: #1d1d1f;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: inherit;
    overflow-y: auto;
}

.shortcuts-header {
    padding: 20px 25px 10px 25px;
    border-bottom: 1px solid #e5e5e5;
    flex-shrink: 0;
}

.shortcuts-header h1 {
    margin: 0;
    font-size: 2em;
    font-weight: 700;
    color: #007aff; /* Apple blue */
}

.shortcuts-grid {
    flex-grow: 1;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    align-content: start; /* Align items to the start of the grid */
}

.shortcut-card {
    background-color: #fff;
    border-radius: 12px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.shortcut-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.shortcut-icon {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.2em;
    color: #fff;
    margin-bottom: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.shortcut-title {
    font-size: 1.1em;
    font-weight: 600;
    margin: 0 0 5px 0;
    color: #333;
}

.shortcut-description {
    font-size: 0.85em;
    color: #8a8a8e;
    margin: 0;
}
`;

export function initShortcuts(containerElement) {
    const shortcutCards = containerElement.querySelectorAll('.shortcut-card');

    shortcutCards.forEach(card => {
        card.addEventListener('click', () => {
            const shortcutId = card.dataset.shortcutId;
            const shortcutTitle = card.querySelector('.shortcut-title').textContent;
            alert(`Shortcut "${shortcutTitle}" (${shortcutId}) clicked!`);
            // In a real app, you would add logic here to perform the shortcut's action.
            // For example:
            // if (shortcutId === 'open-calculator') {
            //     // Logic to open calculator app
            // } else if (shortcutId === 'play-music') {
            //     // Logic to play music
            // }
        });
    });
}