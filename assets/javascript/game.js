// Create event listener for when a key is pressed
document.onkeyup = keyUpHandler;

// Generate random magic letter
let letters = 'abcdefghijklmnopqrstuvwxyz';
letters = letters.toUpperCase();
let randomIndex = Math.floor(Math.random() * letters.length);
let magicLetter = letters[randomIndex];

let guessedLetters = [];

console.log(randomIndex);
console.log(magicLetter);

let guessesRemaining = 10;
document.getElementById('guessesRemaining').innerHTML = guessesRemaining;

// This is the logic for the game
// Get input from user when a key is pressed
function keyUpHandler(event) {
    // Filter non letters
    if (!letters.includes(event.key.toUpperCase())) {
        return;
    }

    // Ignore redundant input from user
    // On key press, check if the letter has already been pressed
    if (guessedLetters.includes(event.key)) {
        // If it has not been pressed, return true
        return;
    } else {
        // If it has been pressed, return false
        guessedLetters.push(event.key);

        // Display number of guesses remaining under 'Your Guesses Thus Far'
        document.getElementById('guessedLetters').innerHTML = guessedLetters.join(', ');
    }

    // Show pressed keys in console
    console.log(guessedLetters);

    // Check if key is the magic letter
    if (event.key.toUpperCase() === magicLetter.toUpperCase()) {
        // If it is the magic letter, win (call a win function)
        win();
    } else {
        // If not, decrement guess count
        guessesRemaining -= 1;
    }

    // Display the number of remaining guesses under 'Guesses Remaining'
    console.log('Number of guesses remaining: ' + guessesRemaining);
    document.getElementById('guessesRemaining').innerHTML = guessesRemaining;

    // If zero guesses left, lose (call a lose function) and reset guesses remaining
    if (guessesRemaining === 0) {
        lose();
    }
}

function win() {
    console.log('You win!');
    // Display number of wins in browser
    let wins = parseInt(document.getElementById('winCount').innerHTML);
    wins += 1;
    document.getElementById('winCount').innerHTML = wins;

    // Display win screen
    let winScreen = document.getElementById('winScreen');
    winScreen.style.visibility = 'visible';
}

function lose() {
    console.log('You lose!');
    // Display number of losses in browser
    let losses = parseInt(document.getElementById('lossCount').innerHTML);
    losses += 1;
    document.getElementById('lossCount').innerHTML = losses;
    
    // Display lose screen
    let loseScreen = document.getElementById('loseScreen');
    loseScreen.style.visibility = 'visible';
}

function reset() {
    // Reset guesses remaining
    guessesRemaining = 10;
    document.getElementById('guessesRemaining').innerHTML = guessesRemaining;

    // Empty guessed letters array
    guessedLetters = [];
    document.getElementById('guessedLetters').innerHTML = guessedLetters.join(', ');

    // Select new magic letter
    randomIndex = Math.floor(Math.random() * letters.length);
    magicLetter = letters[randomIndex];
    console.log(magicLetter);

    // Make win screen and lose screen hidden on reset
    winScreen.style.visibility = 'hidden';
    loseScreen.style.visibility = 'hidden';
}