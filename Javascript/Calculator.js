let currentInput = '';
let lastAnswer = '';

// Når et tall trykkes, legger vi det til i input-feltet
function appendNumber(num) {
    // Legger til det trykkede tallet til det eksisterende input
    currentInput += num;
    // Oppdaterer input-feltet med det nye tallet
    document.getElementById('result').value = currentInput;
}

// Når en operator (+, -, *, /) trykkes, legger vi den til i input-feltet
function appendOperator(operator) {
    // Legger til operatoren (pluss, minus, etc.) til input-feltet
    currentInput += ' ' + operator + ' ';
    // Oppdaterer input-feltet med den nye operatoren
    document.getElementById('result').value = currentInput;
}

// Når "C" trykkes, tømmer vi input-feltet
function clearResult() {
    // Tømmer alle tegn i input-feltet
    currentInput = '';
    // Oppdaterer input-feltet til å være tomt
    document.getElementById('result').value = '';
}

// Når "=" trykkes, regner vi ut resultatet
function calculate() {
    try {
        // Utfører beregningen ved hjelp av eval() og viser resultatet i input-feltet
        let result = eval(currentInput);
        document.getElementById('result').value = result;
        // Husker det siste svaret
        lastAnswer = result;
        // Etter beregning, tømmer vi input-feltet
        currentInput = '';
    } catch (error) {
        // Hvis noe går galt, viser vi en feilmelding
        document.getElementById('result').value = 'Feil';
        // Tømmer input-feltet etter feil
        currentInput = '';
    }
}

// Når "exc" trykkes, viser vi det siste svaret
function exc() {
    // Hvis det er et siste svar, viser vi det i input-feltet
    if (lastAnswer) {
        currentInput = lastAnswer;
        document.getElementById('result').value = lastAnswer;
    }
}
