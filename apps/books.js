export const booksHtml = `
<div class="books-app-container">
    <nav class="books-nav">
        <button class="books-nav-btn active" data-target="library"><i class="fa fa-book-open"></i> Library</button>
        <button class="books-nav-btn" data-target="store"><i class="fa fa-shopping-basket"></i> Store</button>
        <button class="books-nav-btn" data-target="finished"><i class="fa fa-check-square"></i> Finished</button>
    </nav>
    <main class="books-content">
        <section id="books-library" class="books-page active">
            <h2>Reading Now</h2>
            <div class="book-grid">
                <div class="book-card">
                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Book Cover">
                    <h3 class="book-title">The Silent Patient</h3>
                    <p class="book-author">Alex Michaelides</p>
                </div>
                <div class="book-card">
                    <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Book Cover">
                    <h3 class="book-title">The Midnight Library</h3>
                    <p class="book-author">Matt Haig</p>
                </div>
            </div>
        </section>

        <section id="books-store" class="books-page">
            <h2>Book Store</h2>
            <div class="store-featured">
                <img src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Featured Book">
                <div class="featured-info">
                    <h3>New Release: "The Yellow Book"</h3>
                    <p>Discover the most anticipated novel of the year. A thrilling mystery that will keep you on the edge of your seat.</p>
                    <button>Get</button>
                </div>
            </div>
            <h3>Discover</h3>
            <div class="book-grid">
                 <div class="book-card">
                    <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Book Cover">
                    <h3 class="book-title">A Pile of Knowledge</h3>
                    <p class="book-author">Jane Doe</p>
                </div>
                 <div class="book-card">
                    <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Book Cover">
                    <h3 class="book-title">The Reader</h3>
                    <p class="book-author">John Smith</p>
                </div>
                 <div class="book-card">
                    <img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Book Cover">
                    <h3 class="book-title">Endless Shelves</h3>
                    <p class="book-author">Emily White</p>
                </div>
            </div>
        </section>

        <section id="books-finished" class="books-page">
            <h2>Completed</h2>
            <div class="book-grid">
                <div class="book-card">
                    <img src="https://images.unsplash.com/photo-1543002588-b9b6db022976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Book Cover">
                    <h3 class="book-title">The Alchemist</h3>
                    <p class="book-author">Paulo Coelho</p>
                </div>
            </div>
        </section>
    </main>
</div>
`;

export const booksCss = `
.books-app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #f8f8f8;
    color: #1d1d1f;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: inherit;
    overflow: hidden;
}

.books-nav {
    display: flex;
    justify-content: center;
    padding: 5px 0;
    border-bottom: 1px solid #e0e0e0;
    background-color: #fff;
    flex-shrink: 0;
}

.books-nav-btn {
    background: none;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    color: #8a8a8e;
    border-bottom: 3px solid transparent;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    gap: 8px;
}

.books-nav-btn.active, .books-nav-btn:hover {
    color: #007aff;
}

.books-nav-btn.active {
    border-bottom-color: #007aff;
}

.books-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 20px;
}

.books-page {
    display: none;
}

.books-page.active {
    display: block;
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.books-page h2 {
    font-size: 1.8em;
    font-weight: 700;
    margin-bottom: 20px;
}

.book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 25px;
}

.book-card {
    cursor: pointer;
    text-align: left;
}

.book-card img {
    width: 100%;
    height: 210px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.book-card:hover img {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.book-title {
    font-size: 1em;
    font-weight: 600;
    margin: 10px 0 2px 0;
}

.book-author {
    font-size: 0.9em;
    color: #8a8a8e;
    margin: 0;
}

.store-featured {
    display: flex;
    gap: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
    align-items: center;
}

.store-featured img {
    width: 120px;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
}

.featured-info h3 {
    margin-top: 0;
}

.featured-info button {
    background-color: #007aff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
}
`;

export function initBooks(containerElement) {
    const navButtons = containerElement.querySelectorAll('.books-nav-btn');
    const pages = containerElement.querySelectorAll('.books-page');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and pages
            navButtons.forEach(btn => btn.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Show the corresponding page
            const targetId = `books-${button.dataset.target}`;
            const targetPage = containerElement.querySelector(`#${targetId}`);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });
}