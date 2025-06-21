export const musicHtml = `
<div class="music-app-container">
    <div class="music-player">
        <div class="album-art">
            <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Album Art">
        </div>
        <div class="song-info">
            <h2 class="song-title">Stargazing</h2>
            <p class="artist-name">The Neighbourhood</p>
        </div>
        <div class="progress-container">
            <div class="time-stamps">
                <span class="current-time">1:23</span>
                <span class="total-time">3:45</span>
            </div>
            <div class="progress-bar-wrapper">
                <div class="progress-bar" style="width: 35%;"></div>
            </div>
        </div>
        <div class="controls">
            <i class="fa fa-random control-btn"></i>
            <i class="fa fa-step-backward control-btn"></i>
            <i class="fa fa-play-circle control-btn play-btn"></i>
            <i class="fa fa-step-forward control-btn"></i>
            <i class="fa fa-repeat control-btn"></i>
        </div>
        <div class="volume-container">
            <i class="fa fa-volume-down"></i>
            <input type="range" class="volume-slider" min="0" max="100" value="80">
            <i class="fa fa-volume-up"></i>
        </div>
    </div>
    <div class="music-library">
        <h3>Up Next</h3>
        <ul>
            <li>
                <div class="library-song">
                    <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Album Art">
                    <div class="library-song-info">
                        <p class="library-title">Summer Vibes</p>
                        <p class="library-artist">Glass Animals</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="library-song">
                    <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Album Art">
                    <div class="library-song-info">
                        <p class="library-title">Retro Waves</p>
                        <p class="library-artist">Com Truise</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="library-song">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Album Art">
                    <div class="library-song-info">
                        <p class="library-title">Headphones On</p>
                        <p class="library-artist">Lofi Girl</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
`;

export const musicCss = `
.music-app-container {
    display: flex;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #2c2a2a, #1a1a1a);
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow: hidden;
    border-radius: inherit; /* Inherit border radius from parent window */
}

.music-player {
    flex: 2;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.album-art img {
    width: clamp(150px, 30vw, 250px);
    height: clamp(150px, 30vw, 250px);
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.5);
    margin-bottom: 25px;
    object-fit: cover;
}

.song-info .song-title {
    font-size: clamp(1.5em, 4vw, 2em);
    margin: 0;
    font-weight: 600;
}

.song-info .artist-name {
    font-size: clamp(1em, 2.5vw, 1.2em);
    color: #b3b3b3;
    margin-top: 8px;
}

.progress-container {
    width: 90%;
    max-width: 400px;
    margin: 25px 0;
}

.progress-bar-wrapper {
    background-color: #535353;
    height: 5px;
    border-radius: 2.5px;
    cursor: pointer;
    width: 100%;
    margin-top: 5px;
}

.progress-bar {
    height: 100%;
    background-color: #fff;
    border-radius: 2.5px;
    transition: width 0.1s linear;
}
.progress-bar-wrapper:hover .progress-bar {
    background-color: #1db954;
}

.time-stamps {
    display: flex;
    justify-content: space-between;
    font-size: 0.8em;
    color: #b3b3b3;
}

.controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin: 15px 0;
}

.control-btn {
    font-size: 1.6em;
    color: #b3b3b3;
    cursor: pointer;
    transition: all 0.2s ease;
}

.control-btn:hover {
    color: #fff;
}

.play-btn {
    font-size: 3.5em;
    color: #fff;
}

.play-btn:hover {
    transform: scale(1.05);
}

.volume-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 80%;
    max-width: 250px;
    margin-top: 25px;
    color: #b3b3b3;
}

.volume-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 5px;
    background: #535353;
    outline: none;
    border-radius: 2.5px;
    cursor: pointer;
    transition: background 0.2s ease;
}

.volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
}

.volume-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
}

.music-library {
    flex: 1;
    min-width: 200px;
    background-color: rgba(0,0,0,0.2);
    padding: 20px;
    overflow-y: auto;
}

.music-library h3 {
    margin-top: 0;
    border-bottom: 1px solid #404040;
    padding-bottom: 10px;
    font-weight: 500;
}

.music-library ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.music-library li {
    padding: 8px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s ease;
}
.music-library li:hover {
    background-color: rgba(255,255,255,0.1);
}

.library-song {
    display: flex;
    align-items: center;
    gap: 15px;
}

.library-song img {
    width: 45px;
    height: 45px;
    border-radius: 4px;
    object-fit: cover;
}

.library-song-info .library-title {
    margin: 0;
    font-weight: 500;
    font-size: 0.95em;
}

.library-song-info .library-artist {
    margin: 0;
    font-size: 0.85em;
    color: #b3b3b3;
}`