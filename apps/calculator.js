export const calculatorHtml = `
<div class="calculator-container" style="height:100%">
    <table class="tableOfCalculator">
        <tbody>
            <tr>
                <td colspan="4">
                    <div class="inputOfCalculator">
                        <input id="calculator-display" class="wh-100p" type="text" readonly>
                    </div>
                </td>
                <td rowspan="7">
                    <div id="calculator-history"></div>
                </td>
            </tr>
            <tr>
                <td><div class="calculator-btn" data-action="percentage">%</div></td>
                <td><div class="calculator-btn" data-action="clear-entry">CE</div></td>
                <td><div class="calculator-btn" data-action="clear">C</div></td>
                
<td><div class="calculator-btn" data-action="backspace"><i class='fas fa-backspace'></i></div></td>
            </tr>
            <tr>
                <td><div class="calculator-btn" data-action="inverse">1/x</div></td>
                <td><div class="calculator-btn" data-action="square">x<sup>2</sup></div></td>
                <td><div class="calculator-btn" data-action="sqrt"><sup>2</sup>√x</div></td>
                <td><div class="calculator-btn operator" data-action="divide">÷</div></td>
            </tr>
            <tr>
                <td><div class="calculator-btn number" data-value="7">7</div></td>
                <td><div class="calculator-btn number" data-value="8">8</div></td>
                <td><div class="calculator-btn number" data-value="9">9</div></td>
                <td><div class="calculator-btn operator" data-action="multiply">&#215;</div></td>
            </tr>
            <tr>
                <td><div class="calculator-btn number" data-value="4">4</div></td>
                <td><div class="calculator-btn number" data-value="5">5</div></td>
                <td><div class="calculator-btn number" data-value="6">6</div></td>
                <td><div class="calculator-btn operator" data-action="subtract">-</div></td>
            </tr>
            <tr>
                <td><div class="calculator-btn number" data-value="1">1</div></td>
                <td><div class="calculator-btn number" data-value="2">2</div></td>
                <td><div class="calculator-btn number" data-value="3">3</div></td>
                <td><div class="calculator-btn operator" data-action="add">+</div></div></td>
            </tr>
            <tr>
                <td colspan="2"><div class="calculator-btn number" data-value="0">0</div></td>
                <td><div class="calculator-btn number" data-value=".">.</div></td>
                <td><div class="calculator-btn operator" data-action="equals">=</div></td>
            </tr>
        </tbody>
    </table>
</div>`;

export const calculatorCss = `
.calculator-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #333; /* Darker background for the calculator itself */
    color: white;
}
.tableOfCalculator {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.tableOfCalculator tbody {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.tableOfCalculator tr {
    display: flex;
    flex-grow: 1;
}
.tableOfCalculator td {
    flex-grow: 1;
    display: flex;
    padding: 2px; /* Reduced padding for tighter layout */
}
.inputOfCalculator {
    padding: 5px; /* Padding around the display */
    background-color: #1c1c1c; /* Darker background for display area */
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
#calculator-display {
    width: 100%;
    height: 50px; /* Fixed height for display */
    background-color: #1c1c1c;
    color: white;
    border: none;
    text-align: right;
    font-size: 2.5em; /* Larger font for display */
    padding: 0 10px;
    box-sizing: border-box;
}
#calculator-history {
    background-color: #2a2a2a; /* History background */
    color: #aaa;
    font-size: 0.8em;
    padding: 5px;
    overflow-y: auto;
    text-align: right;
    flex-basis: 100px; /* Fixed width for history column */
    min-width: 100px;
}
.calculator-btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #505050; /* Default button color */
    border-radius: 5px;
    font-size: 1.5em;
    height: 100%;
    width: 100%;
    transition: background-color 0.1s ease;
}
.calculator-btn:active {
    background-color: #707070; /* Darker on active */
}
.calculator-btn.operator {
    background-color: #fe9500; /* Orange for operators */
}
.calculator-btn.operator:active {
    background-color: #ffb030; /* Lighter orange on active */
}
.calculator-btn.number {
    background-color: #d4d4d2; /* Light gray for numbers */
    color: #333;
}
.calculator-btn.number:active {
    background-color: #e0e0e0; /* Lighter gray on active */
}
/* Specific styling for the '0' button to span two columns */
.tableOfCalculator td[colspan="2"] .calculator-btn {
    border-radius: 5px; /* Ensure border-radius is applied */
}
`;

export function initCalculator(containerElement) {
    const display = containerElement.querySelector('#calculator-display');
    const history = containerElement.querySelector('#calculator-history');
    const buttons = containerElement.querySelectorAll('.calculator-btn');

    let currentInput = '0';
    let operator = null;
    let previousInput = '';
    let historyLog = [];
    let waitingForNewNumber = false;

    function updateDisplay() {
        display.value = currentInput;
    }

    function addHistory(entry) {
        historyLog.push(entry);
        history.innerHTML = historyLog.join('<br>');
        history.scrollTop = history.scrollHeight; // Scroll to bottom
    }

    function clearAll() {
        currentInput = '0';
        operator = null;
        previousInput = '';
        historyLog = [];
        history.innerHTML = '';
        waitingForNewNumber = false;
        updateDisplay();
    }

    function clearEntry() {
        currentInput = '0';
        updateDisplay();
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '&#215;': // Multiply
                result = prev * current;
                break;
            case '÷': // Divide
                if (current === 0) {
                    result = 'Error';
                } else {
                    result = prev / current;
                }
                break;
            default:
                return;
        }

        if (result === 'Error') {
            currentInput = result;
            operator = null;
            previousInput = '';
            waitingForNewNumber = true;
            addHistory(`${prev} ${operator} ${current} = ${result}`);
        } else {
            currentInput = result.toString();
            addHistory(`${previousInput} ${operator} ${current} = ${result}`);
            operator = null;
            previousInput = '';
            waitingForNewNumber = true;
        }
        updateDisplay();
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;
            const action = button.dataset.action;

            if (action) {
                // Handle actions
                switch (action) {
                    case 'clear':
                        clearAll();
                        break;
                    case 'clear-entry':
                        clearEntry();
                        break;
                    case 'backspace':
                        currentInput = currentInput.slice(0, -1) || '0';
                        updateDisplay();
                        break;
                    case 'equals':
                        calculate();
                        break;
                    case 'add':
                    case 'subtract':
                    case 'multiply':
                    case 'divide':
                        if (operator && previousInput && !waitingForNewNumber) {
                            calculate(); // Chain operations
                            previousInput = currentInput;
                            currentInput = '0';
                        } else if (currentInput !== '0' && !waitingForNewNumber) {
                            previousInput = currentInput;
                            currentInput = '0';
                        }
                        operator = button.textContent; // Store the operator's symbol
                        waitingForNewNumber = true;
                        break;
                    case 'inverse':
                        currentInput = (1 / parseFloat(currentInput)).toString();
                        updateDisplay();
                        break;
                    case 'square':
                        currentInput = (parseFloat(currentInput) * parseFloat(currentInput)).toString();
                        updateDisplay();
                        break;
                    case 'sqrt':
                        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                        updateDisplay();
                        break; // Percentage
                    case 'percentage':
                        currentInput = (parseFloat(currentInput) / 100).toString();
                        updateDisplay();
                        break;
                }
            } else if (value) {
                // Handle number/decimal input
                if (waitingForNewNumber) {
                    currentInput = value;
                    waitingForNewNumber = false;
                } else {
                    if (value === '.' && currentInput.includes('.')) {
                        return; // Prevent multiple decimals
                    }
                    if (currentInput === '0' && value !== '.') {
                        currentInput = value;
                    } else {
                        currentInput += value;
                    }
                }
                updateDisplay();
            }
        });
    });

    // Initial display update
    updateDisplay();
}