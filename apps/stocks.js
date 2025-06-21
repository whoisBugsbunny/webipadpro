export const stocksHtml = `
<div class="stocks-app-container">
    <header class="stocks-header">
        <h1>Stocks</h1>
        <span class="stocks-date">October 26, 2023</span>
    </header>
    <div class="stocks-watchlist">
        <ul>
            <li class="stock-item">
                <div class="stock-info">
                    <h2 class="stock-ticker">AAPL</h2>
                    <p class="stock-name">Apple Inc.</p>
                </div>
                <div class="stock-graph">
                    <svg viewBox="0 0 100 30" class="sparkline-up">
                        <polyline points="0,25 10,20 20,22 30,15 40,18 50,12 60,14 70,8 80,10 90,5 100,8" />
                    </svg>
                </div>
                <div class="stock-price-info">
                    <p class="stock-price">$170.15</p>
                    <p class="stock-change stock-change-up">+1.50 (0.89%)</p>
                </div>
            </li>
            <li class="stock-item">
                <div class="stock-info">
                    <h2 class="stock-ticker">GOOGL</h2>
                    <p class="stock-name">Alphabet Inc.</p>
                </div>
                <div class="stock-graph">
                    <svg viewBox="0 0 100 30" class="sparkline-down">
                        <polyline points="0,8 10,12 20,10 30,18 40,15 50,20 60,22 70,25 80,23 90,28 100,26" />
                    </svg>
                </div>
                <div class="stock-price-info">
                    <p class="stock-price">$138.50</p>
                    <p class="stock-change stock-change-down">-0.75 (0.54%)</p>
                </div>
            </li>
            <li class="stock-item">
                <div class="stock-info">
                    <h2 class="stock-ticker">TSLA</h2>
                    <p class="stock-name">Tesla, Inc.</p>
                </div>
                <div class="stock-graph">
                    <svg viewBox="0 0 100 30" class="sparkline-up">
                        <polyline points="0,28 10,25 20,26 30,20 40,22 50,18 60,15 70,10 80,12 90,8 100,5" />
                    </svg>
                </div>
                <div class="stock-price-info">
                    <p class="stock-price">$212.45</p>
                    <p class="stock-change stock-change-up">+2.10 (1.00%)</p>
                </div>
            </li>
             <li class="stock-item">
                <div class="stock-info">
                    <h2 class="stock-ticker">AMZN</h2>
                    <p class="stock-name">Amazon.com, Inc.</p>
                </div>
                <div class="stock-graph">
                    <svg viewBox="0 0 100 30" class="sparkline-down">
                        <polyline points="0,5 10,8 20,6 30,12 40,10 50,15 60,18 70,22 80,20 90,25 100,28" />
                    </svg>
                </div>
                <div class="stock-price-info">
                    <p class="stock-price">$126.57</p>
                    <p class="stock-change stock-change-down">-2.05 (1.59%)</p>
                </div>
            </li>
        </ul>
    </div>
</div>
`;

export const stocksCss = `
.stocks-app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #000;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: inherit;
    overflow: hidden;
}

.stocks-header {
    padding: 20px 25px 10px 25px;
    border-bottom: 1px solid #2c2c2e;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-shrink: 0;
}

.stocks-header h1 {
    margin: 0;
    font-size: 2em;
    font-weight: 700;
}

.stocks-header .stocks-date {
    font-size: 0.9em;
    font-weight: 500;
    color: #8a8a8e;
}

.stocks-watchlist {
    flex-grow: 1;
    overflow-y: auto;
}

.stocks-watchlist ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.stock-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    border-bottom: 1px solid #2c2c2e;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.stock-item:hover {
    background-color: #1c1c1e;
}

.stock-item:last-child {
    border-bottom: none;
}

.stock-info {
    flex: 1;
    min-width: 100px;
}

.stock-ticker {
    margin: 0;
    font-size: 1.2em;
    font-weight: 600;
}

.stock-name {
    margin: 2px 0 0 0;
    font-size: 0.9em;
    color: #8a8a8e;
}

.stock-graph {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
}

.stock-graph svg {
    width: 100%;
    max-width: 120px;
    height: 30px;
}

.sparkline-up, .sparkline-down {
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.sparkline-up {
    stroke: #34c759; /* Green for up */
}

.sparkline-down {
    stroke: #ff3b30; /* Red for down */
}

.stock-price-info {
    flex: 1;
    text-align: right;
    min-width: 120px;
}

.stock-price {
    margin: 0;
    font-size: 1.2em;
    font-weight: 500;
}

.stock-change {
    margin: 2px 0 0 0;
    font-size: 0.9em;
    padding: 3px 6px;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
}

.stock-change-up {
    background-color: #34c759;
}

.stock-change-down {
    background-color: #ff3b30;
}`