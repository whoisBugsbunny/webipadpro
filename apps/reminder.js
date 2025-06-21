export const reminderHtml = `
<div class="reminder-app-container">
    <header class="reminder-header">
        <h1>Reminders</h1>
        <span class="reminder-count">4 items</span>
    </header>
    <ul class="reminder-list">
        <li class="reminder-item completed">
            <div class="reminder-check-wrapper">
                <i class="fa fa-check-circle"></i>
            </div>
            <div class="reminder-details">
                <p class="reminder-text">Design the TV app UI</p>
            </div>
            <button class="reminder-delete-btn"><i class="fa fa-trash"></i></button>
        </li>
        <li class="reminder-item">
            <div class="reminder-check-wrapper">
                <i class="fa fa-circle-o"></i>
            </div>
            <div class="reminder-details">
                <p class="reminder-text">Finish the UI for the new app</p>
                <span class="reminder-due-date">Today, 5:00 PM</span>
            </div>
            <button class="reminder-delete-btn"><i class="fa fa-trash"></i></button>
        </li>
        <li class="reminder-item">
            <div class="reminder-check-wrapper">
                <i class="fa fa-circle-o"></i>
            </div>
            <div class="reminder-details">
                <p class="reminder-text">Plan the next project feature</p>
            </div>
            <button class="reminder-delete-btn"><i class="fa fa-trash"></i></button>
        </li>
         <li class="reminder-item">
            <div class="reminder-check-wrapper">
                <i class="fa fa-circle-o"></i>
            </div>
            <div class="reminder-details">
                <p class="reminder-text">Buy groceries</p>
                 <span class="reminder-due-date">Tomorrow</span>
            </div>
            <button class="reminder-delete-btn"><i class="fa fa-trash"></i></button>
        </li>
    </ul>
    <footer class="reminder-footer">
        <input type="text" class="new-reminder-input" placeholder="Add a new reminder...">
        <button class="add-reminder-btn"><i class="fa fa-plus"></i></button>
    </footer>
</div>
`;

export const reminderCss = `
.reminder-app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #fff;
    color: #1d1d1f;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: inherit;
    overflow: hidden;
}

.reminder-header {
    padding: 20px 25px 10px 25px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.reminder-header h1 {
    margin: 0;
    font-size: 2em;
    font-weight: 700;
    color: #ff9500; /* Orange to match icon */
}

.reminder-header .reminder-count {
    font-size: 1em;
    font-weight: 600;
    color: #8a8a8e;
}

.reminder-list {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
    overflow-y: auto;
}

.reminder-item {
    display: flex;
    align-items: center;
    padding: 15px 25px;
    border-bottom: 1px solid #e5e5e5;
    transition: background-color 0.2s ease;
}

.reminder-item:last-child {
    border-bottom: none;
}

.reminder-check-wrapper {
    font-size: 1.5em;
    color: #ff9500;
    cursor: pointer;
    margin-right: 20px;
    transition: color 0.2s ease;
}

.reminder-details {
    flex-grow: 1;
}

.reminder-text {
    margin: 0 0 2px 0;
    font-size: 1.05em;
    transition: color 0.3s ease;
}

.reminder-due-date {
    font-size: 0.85em;
    color: #8a8a8e;
}

.reminder-item.completed .reminder-text {
    text-decoration: line-through;
    color: #8a8a8e;
}

.reminder-item.completed .reminder-check-wrapper {
    color: #8a8a8e;
}

.reminder-delete-btn {
    background: none;
    border: none;
    color: #ccc;
    font-size: 1.2em;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s ease, color 0.2s ease;
}

.reminder-item:hover .reminder-delete-btn {
    opacity: 1;
}

.reminder-delete-btn:hover {
    color: #dc3545; /* Red for delete */
}

.reminder-footer {
    display: flex;
    padding: 10px 15px;
    border-top: 1px solid #e5e5e5;
    background-color: #f5f5f7;
}

.new-reminder-input {
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 1em;
    background-color: transparent;
}

.add-reminder-btn {
    background: #ff9500;
    border: none;
    color: white;
    font-size: 1.5em;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
    flex-shrink: 0;
}

.add-reminder-btn:hover {
    background-color: #f5a623;
}
`;