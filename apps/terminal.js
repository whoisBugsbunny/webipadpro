export const terminalHtml = `
<div class="terminal-app-container">
    <header class="terminal-header">
        <h1>Terminal</h1>
    </header>
    <div class="terminal-output" id="terminal-output">
        <p class="terminal-line">Welcome to WebiPadPro Terminal!</p>
        <p class="terminal-line">Type '<span class="command-name">help</span>' for a list of commands.</p>
        <p class="terminal-line">></p>
    </div>
    <div class="terminal-input-wrapper">
        <span class="terminal-prompt">></span>
        <input type="text" class="terminal-input" id="terminal-input" autofocus>
    </div>
</div>
`;

export const terminalCss = `
.terminal-app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #1e1e1e; /* Dark background */
    color: #00ff00; /* Green text for classic terminal feel */
    font-family: 'Monaco', 'Consolas', 'Lucida Console', monospace; /* Monospace font */
    border-radius: inherit;
    overflow: hidden;
}

.terminal-header {
    padding: 10px 15px;
    background-color: #2a2a2a;
    border-bottom: 1px solid #3a3a3a;
    flex-shrink: 0;
}

.terminal-header h1 {
    margin: 0;
    font-size: 1.2em;
    font-weight: normal;
    color: #f0f0f0;
}

.terminal-output {
    flex-grow: 1;
    padding: 10px 15px;
    overflow-y: auto;
    white-space: pre-wrap; /* Preserve whitespace and wrap text */
    word-break: break-all; /* Break long words */
}

.terminal-line {
    margin: 0;
    line-height: 1.4;
}

.terminal-input-wrapper {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #2a2a2a;
    border-top: 1px solid #3a3a3a;
    flex-shrink: 0;
}

.terminal-prompt {
    color: #00ff00; /* Green prompt */
    margin-right: 5px;
    font-weight: bold;
}

.terminal-input {
    flex-grow: 1;
    background-color: transparent;
    border: none;
    outline: none;
    color: #00ff00; /* Green input text */
    font-family: 'Monaco', 'Consolas', 'Lucida Console', monospace;
    font-size: 1em;
    caret-color: #00ff00; /* Green cursor */
}

/* Optional: Style for command names in help */
.command-name {
    color: #00ffff; /* Cyan for command names */
    font-weight: bold;
}
`;

export function initTerminal(containerElement) {
    const outputElement = containerElement.querySelector('#terminal-output');
    const inputElement = containerElement.querySelector('#terminal-input');

    // Focus the input when the app opens
    inputElement.focus();

    inputElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = inputElement.value.trim();
            if (command === '') {
                outputElement.innerHTML += `<p class="terminal-line">></p>`;
            } else {
                outputElement.innerHTML += `<p class="terminal-line"><span class="terminal-prompt">></span> ${command}</p>`;
                processCommand(command);
            }
            inputElement.value = '';
            outputElement.scrollTop = outputElement.scrollHeight; // Scroll to bottom
        }
    });

    function processCommand(command) {
        let response = '';
        const lowerCommand = command.toLowerCase();

        if (lowerCommand === 'help') {
            response = `
                <p class="terminal-line">Available commands:</p>
                <p class="terminal-line">  <span class="command-name">help</span> - Display this help message</p>
                <p class="terminal-line">  <span class="command-name">echo &lt;text&gt;</span> - Repeat the given text</p>
                <p class="terminal-line">  <span class="command-name">clear</span> - Clear the terminal screen</p>
                <p class="terminal-line">  <span class="command-name">date</span> - Show current date and time</p>
                <p class="terminal-line">  <span class="command-name">whoami</span> - Display current user</p>
            `;
        } else if (lowerCommand.startsWith('echo ')) {
            response = `<p class="terminal-line">${command.substring(5)}</p>`;
        } else if (lowerCommand === 'clear') {
            outputElement.innerHTML = ''; // Clear all content
            return; // Don't add a response or new prompt immediately after clear
        } else if (lowerCommand === 'date') {
            response = `<p class="terminal-line">${new Date().toLocaleString()}</p>`;
        } else if (lowerCommand === 'whoami') {
            response = `<p class="terminal-line">guest@webipadpro</p>`;
        } else {
            response = `<p class="terminal-line">Command not found: ${command}</p>`;
        }
        outputElement.innerHTML += response;
        outputElement.innerHTML += `<p class="terminal-line">></p>`; // Add new prompt after response
    }
}