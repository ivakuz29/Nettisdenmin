let currentInput = '';

// Function to append numbers to the result input
function appendNumber(num) {
    currentInput += num;
    document.getElementById('result').value = currentInput;
}

// Function to append operators (+, -, *, /)
function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    document.getElementById('result').value = currentInput;
}

// Function to clear the input field
function clearResult() {
    currentInput = '';
    document.getElementById('result').value = '';
}

// Function to calculate the result
function calculate() {
    try {
        document.getElementById('result').value = eval(currentInput);
        currentInput = '';
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}

 