export const settingsHtml = `
<div class="settings-app-container">
    <header class="settings-header">
        <h1>Settings</h1>
    </header>
    <div class="settings-main">
        <aside class="settings-sidebar">
            <nav class="settings-nav">
                <a href="#" class="settings-nav-link active" data-target="general">
                    <div class="settings-icon-wrapper" style="background-color: #007aff;"><i class="fa fa-cog"></i></div>
                    <span>General</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="display">
                    <div class="settings-icon-wrapper" style="background-color: #5856d6;"><i class="fa fa-adjust"></i></div>
                    <span>Display & Brightness</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="sound">
                    <div class="settings-icon-wrapper" style="background-color: #ff2d55;"><i class="fa fa-volume-up"></i></div>
                    <span>Sound & Haptics</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="notifications">
                    <div class="settings-icon-wrapper" style="background-color: #ff9500;"><i class="fa fa-bell"></i></div>
                    <span>Notifications</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="privacy">
                    <div class="settings-icon-wrapper" style="background-color: #34c759;"><i class="fa fa-shield-alt"></i></div>
                    <span>Privacy & Security</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="battery">
                    <div class="settings-icon-wrapper" style="background-color: #34c759;"><i class="fa fa-battery-full"></i></div>
                    <span>Battery</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="appstore">
                    <div class="settings-icon-wrapper" style="background-color: #1d6ff2;"><i class="fa fa-store"></i></div>
                    <span>App Store</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="books">
                    <div class="settings-icon-wrapper" style="background-color: #f7701d;"><i class="fa fa-book"></i></div>
                    <span>Books</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="music">
                    <div class="settings-icon-wrapper" style="background-color: #fd355a;"><i class="fa fa-music"></i></div>
                    <span>Music</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="tv">
                    <div class="settings-icon-wrapper" style="background-color: #000;"><i class="fa fa-tv"></i></div>
                    <span>TV</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="shortcuts">
                    <div class="settings-icon-wrapper" style="background-color: #1e265a;"><i class="fa fa-project-diagram"></i></div>
                    <span>Shortcuts</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="stocks">
                    <div class="settings-icon-wrapper" style="background-color: #000;"><i class="fa fa-chart-line"></i></div>
                    <span>Stocks</span>
                </a>
                <a href="#" class="settings-nav-link" data-target="reminders">
                    <div class="settings-icon-wrapper" style="background-color: #ff9500;"><i class="fa fa-list-ul"></i></div>
                    <span>Reminders</span>
                </a>
            </nav>
        </aside>
        <main class="settings-content">
            <section id="settings-general" class="settings-page active">
                <h2>General</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>About</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                    <div class="settings-item">
                        <span>Software Update</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                    <div class="settings-item">
                        <span>Date & Time</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Transfer or Reset iPad</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
            </section>

            <section id="settings-display" class="settings-page">
                <h2>Display & Brightness</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Dark Mode</span>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="settings-item">
                        <span>Brightness</span>
                        <input type="range" min="0" max="100" value="70" class="slider-range">
                    </div>
                </div>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Text Size</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                    <div class="settings-item">
                        <span>Bold Text</span>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </section>

            <section id="settings-sound" class="settings-page">
                <h2>Sound & Haptics</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Ringtone</span>
                        <span>Default</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                    <div class="settings-item">
                        <span>Text Tone</span>
                        <span>Chord</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Change with Buttons</span>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </section>

            <section id="settings-notifications" class="settings-page">
                <h2>Notifications</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Show Previews</span>
                        <span>Always</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>App Notifications</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
            </section>

            <section id="settings-privacy" class="settings-page">
                <h2>Privacy & Security</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Location Services</span>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="settings-item">
                        <span>Tracking</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Security Recommendations</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
            </section>

            <section id="settings-battery" class="settings-page">
                <h2>Battery</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Battery Percentage</span>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="settings-item">
                        <span>Low Power Mode</span>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </section>

            <section id="settings-appstore" class="settings-page">
                <h2>App Store</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Automatic Downloads</span>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </section>

            <section id="settings-books" class="settings-page">
                <h2>Books</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Sync Collections</span>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </section>

            <section id="settings-music" class="settings-page">
                <h2>Music</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>EQ</span>
                        <span>Off</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
            </section>

            <section id="settings-tv" class="settings-page">
                <h2>TV</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Playback Quality</span>
                        <span>Best Available</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
            </section>

            <section id="settings-shortcuts" class="settings-page">
                <h2>Shortcuts</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Allow Untrusted Shortcuts</span>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </section>

            <section id="settings-stocks" class="settings-page">
                <h2>Stocks</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Default Watchlist</span>
                        <span>My Stocks</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
            </section>

            <section id="settings-reminders" class="settings-page">
                <h2>Reminders</h2>
                <div class="settings-group">
                    <div class="settings-item">
                        <span>Default List</span>
                        <span>Reminders</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
            </section>
        </main>
    </div>
</div>
`;

export const settingsCss = `
.settings-app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #f5f5f7;
    color: #1d1d1f;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: inherit;
    overflow: hidden;
}

.settings-header {
    padding: 20px 25px 10px 25px;
    border-bottom: 1px solid #e5e5e5;
    flex-shrink: 0;
}

.settings-header h1 {
    margin: 0;
    font-size: 2em;
    font-weight: 700;
}

.settings-main {
    display: flex;
    flex-grow: 1;
    overflow: hidden; /* Ensures content within doesn't overflow */
}

.settings-sidebar {
    width: 250px;
    min-width: 200px;
    background-color: #e8e8ed;
    padding: 10px 0;
    border-right: 1px solid #d1d1d6;
    overflow-y: auto;
    flex-shrink: 0;
}

.settings-nav {
    display: flex;
    flex-direction: column;
}

.settings-nav-link {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 20px;
    text-decoration: none;
    color: #1d1d1f;
    font-weight: 500;
    font-size: 1em;
    border-radius: 8px;
    margin: 2px 10px;
    transition: background-color 0.2s ease;
}

.settings-nav-link:hover {
    background-color: #dcdce1;
}

.settings-nav-link.active {
    background-color: #dcdce1;
    color: #007aff;
}

.settings-icon-wrapper {
    width: 30px;
    height: 30px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.2em;
    flex-shrink: 0;
}

.settings-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 20px 30px;
}

.settings-page {
    display: none;
}

.settings-page.active {
    display: block;
    animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}

.settings-page h2 {
    font-size: 1.8em;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 20px;
}

.settings-group {
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.settings-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 0.95em;
    color: #1d1d1f;
}

.settings-item:last-child {
    border-bottom: none;
}

.settings-item span:first-child {
    flex-grow: 1;
}

.settings-item span:last-child {
    color: #8a8a8e;
}

.settings-item i.fa-chevron-right {
    color: #c7c7cc;
    font-size: 0.8em;
}

/* Toggle Switch Styles */
.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: #007aff;
}

input:focus + .slider {
    box-shadow: 0 0 1px #007aff;
}

input:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 24px;
}

.slider.round:before {
    border-radius: 50%;
}

/* Range Slider Styles */
.slider-range {
    -webkit-appearance: none;
    width: 150px;
    height: 4px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 2px;
}

.slider-range:hover {
    opacity: 1;
}

.slider-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #007aff;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
}

.slider-range::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #007aff;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
}
`;

export function initSettings(containerElement) {
    const navLinks = containerElement.querySelectorAll('.settings-nav-link');
    const pages = containerElement.querySelectorAll('.settings-page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all nav links and pages
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            // Add active class to the clicked nav link
            link.classList.add('active');

            // Show the corresponding settings page
            const targetId = `settings-${link.dataset.target}`;
            const targetPage = containerElement.querySelector(`#${targetId}`);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });
}