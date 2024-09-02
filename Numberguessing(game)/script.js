let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 5;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    document.getElementById('chances').textContent = maxAttempts - attempts;

    if (userGuess === randomNumber) {
        document.getElementById('feedback').textContent = 'Congratulations! You guessed the right number!';
        document.getElementById('feedback').style.color = '#388e3c';
    } else if (userGuess > randomNumber) {
        document.getElementById('feedback').textContent = 'Your number is high';
    } else {
        document.getElementById('feedback').textContent = 'Your number is low';
    }

    if (attempts >= maxAttempts) {
        document.getElementById('guessButton').disabled = true;
        document.getElementById('feedback').textContent += ' Game over!';
    }
});

document.getElementById('restartButton').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('chances').textContent = maxAttempts;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessButton').disabled = false;
});
