export const appStoreHtml = `
<div class="appstore-container">
    <aside class="appstore-sidebar">
        <div class="sidebar-search">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Search">
        </div>
        <nav class="appstore-nav">
            <a href="#" class="nav-link active" data-target="today"><i class="fa fa-star"></i><span>Today</span></a>
            <a href="#" class="nav-link" data-target="games"><i class="fa fa-gamepad"></i><span>Games</span></a>
            <a href="#" class="nav-link" data-target="tools"><i class="fa fa-wrench"></i><span>Tools</span></a>
            <a href="#" class="nav-link" data-target="trending"><i class="fa fa-fire"></i><span>Trending</span></a>
        </nav>
    </aside>
    <main class="appstore-content">
        <section id="appstore-today" class="appstore-page active">
            <header class="page-header">
                <h2>Today</h2>
            </header>
            <div class="featured-card">
                <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Featured App">
                <div class="featured-info">
                    <h4>FEATURED APP</h4>
                    <h3>Code Editor Pro</h3>
                    <p>The ultimate tool for developers on the go.</p>
                </div>
            </div>
            <h3>What We're Playing</h3>
            <div class="app-list">
                <div class="app-item">
                    <img src="ios14icons/svg/apple-tv-1575940.svg" alt="App Icon">
                    <div class="app-info">
                        <h4>Galaxy Raiders</h4>
                        <p>An epic space adventure.</p>
                    </div>
                    <button class="get-btn">GET</button>
                </div>
                <div class="app-item">
                    <img src="ios14icons/svg/my-shortcuts-1575945.svg" alt="App Icon">
                    <div class="app-info">
                        <h4>Puzzle Blocks</h4>
                        <p>Challenge your mind.</p>
                    </div>
                    <button class="get-btn">GET</button>
                </div>
            </div>
        </section>

        <section id="appstore-games" class="appstore-page">
            <header class="page-header">
                <h2>Games</h2>
            </header>
            <div class="app-grid">
                <!-- Repeat this block for each game -->
                <div class="app-grid-item">
                    <img src="ios14icons/svg/apple-tv-1575940.svg" alt="App Icon">
                    <div class="app-info">
                        <h4>Galaxy Raiders</h4>
                        <p>An epic space adventure.</p>
                    </div>
                    <button class="get-btn">GET</button>
                </div>
                <div class="app-grid-item">
                    <img src="ios14icons/svg/my-shortcuts-1575945.svg" alt="App Icon">
                    <div class="app-info">
                        <h4>Puzzle Blocks</h4>
                        <p>Challenge your mind.</p>
                    </div>
                    <button class="get-btn">GET</button>
                </div>
                <div class="app-grid-item">
                    <img src="ios14icons/svg/stocks-2365239.svg" alt="App Icon">
                    <div class="app-info">
                        <h4>Stock Market Sim</h4>
                        <p>Play the market.</p>
                    </div>
                    <button class="get-btn">GET</button>
                </div>
            </div>
        </section>

        <section id="appstore-tools" class="appstore-page">
            <header class="page-header">
                <h2>Tools</h2>
            </header>
             <div class="app-list">
                <div class="app-item">
                    <img src="ios14icons/svg/calculator-1575939.svg" alt="App Icon">
                    <div class="app-info">
                        <h4>Super Calculator</h4>
                        <p>All-in-one calculations.</p>
                    </div>
                    <button class="get-btn">GET</button>
                </div>
                <div class="app-item">
                    <img src="ios14icons/svg/measure-1575947.svg" alt="App Icon">
                    <div class="app-info">
                        <h4>AR Measure</h4>
                        <p>Measure anything with your camera.</p>
                    </div>
                    <button class="get-btn">GET</button>
                </div>
            </div>
        </section>

        <section id="appstore-trending" class="appstore-page">
            <header class="page-header">
                <h2>Trending</h2>
            </header>
            <div class="app-list">
                <div class="app-item">
                    <span class="trending-number">1</span>
                    <img src="icons/ig-instagram.svg" alt="App Icon">
                    <div class="app-info">
                        <h4>PhotoShare</h4>
                        <p>Share your moments.</p>
                    </div>
                    <button class="get-btn">GET</button>
                </div>
                <div class="app-item">
                    <span class="trending-number">2</span>
                    <img src="icons/facebook-app.svg" alt="App Icon">
                    <div class="app-info">
                        <h4>Connect</h4>
                        <p>Social networking.</p>
                    </div>
                    <button class="get-btn">GET</button>
                </div>
            </div>
        </section>
    </main>
</div>
`;

export const appStoreCss = `
.appstore-container {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #f5f5f7;
    color: #1d1d1f;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: inherit;
    overflow: hidden;
}

.appstore-sidebar {
    width: 200px;
    min-width: 180px;
    background-color: #e8e8ed;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #d1d1d6;
    flex-shrink: 0;
}

.sidebar-search {
    margin: 0 15px 20px 15px;
    position: relative;
}

.sidebar-search .fa-search {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #8a8a8e;
}

.sidebar-search input {
    width: 100%;
    padding: 8px 8px 8px 30px;
    border-radius: 8px;
    border: none;
    background-color: #dcdce1;
    outline: none;
    font-size: 0.95em;
}

.appstore-nav {
    flex-grow: 1;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 20px;
    text-decoration: none;
    color: #1d1d1f;
    font-weight: 500;
    font-size: 1.1em;
    border-radius: 8px;
    margin: 2px 10px;
    transition: background-color 0.2s ease;
}

.nav-link i {
    width: 20px;
    text-align: center;
    color: #8a8a8e;
    transition: color 0.2s ease;
}

.nav-link.active, .nav-link:hover {
    background-color: #dcdce1;
}

.nav-link.active i, .nav-link:hover i {
    color: #007aff;
}

.nav-link.active span, .nav-link:hover span {
    color: #007aff;
}

.appstore-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 0 30px;
}

.appstore-page {
    display: none;
}

.appstore-page.active {
    display: block;
    animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}

.page-header {
    padding: 25px 0;
    border-bottom: 1px solid #d1d1d6;
    margin-bottom: 25px;
}

.page-header h2 {
    font-size: 2.2em;
    font-weight: 700;
    margin: 0;
}

.featured-card {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 30px;
    color: white;
    cursor: pointer;
}

.featured-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
}

.featured-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
}

.featured-info h4 {
    font-size: 0.8em;
    font-weight: 600;
    color: #a0a0a5;
    margin: 0;
}
.featured-info h3 {
    font-size: 1.5em;
    margin: 5px 0;
}
.featured-info p {
    margin: 0;
    font-size: 1em;
    color: #e0e0e5;
}

.app-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.app-item {
    display: flex;
    align-items: center;
    gap: 15px;
}

.app-item img {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    flex-shrink: 0;
    background-color: #e8e8ed;
}

.app-info {
    flex-grow: 1;
}

.app-info h4 {
    margin: 0 0 4px 0;
    font-size: 1.1em;
    font-weight: 500;
}

.app-info p {
    margin: 0;
    color: #8a8a8e;
    font-size: 0.9em;
}

.get-btn {
    background-color: #e8e8ed;
    border: none;
    color: #007aff;
    font-weight: 600;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.get-btn:hover {
    background-color: #dcdce1;
}

.app-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

.app-grid-item {
    background-color: #fff;
    padding: 15px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.app-grid-item img {
    width: 80px;
    height: 80px;
    border-radius: 18px;
    margin-bottom: 10px;
}

.app-grid-item .app-info {
    width: 100%;
}

.app-grid-item .get-btn {
    margin-top: 10px;
}

.trending-number {
    font-size: 1.5em;
    font-weight: 600;
    color: #8a8a8e;
    width: 30px;
    text-align: center;
}
`;

export function initAppStore(containerElement) {
    const navLinks = containerElement.querySelectorAll('.nav-link');
    const pages = containerElement.querySelectorAll('.appstore-page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            link.classList.add('active');

            const targetId = `appstore-${link.dataset.target}`;
            const targetPage = containerElement.querySelector(`#${targetId}`);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });
}