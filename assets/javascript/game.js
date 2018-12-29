// Create event listener for when a key is pressed
document.onkeyup = keyUpHandler;

// Generate random magic letter
var letters = "abcdefghijklmnopqrstuvwxyz";
letters = letters.toUpperCase();
var randomIndex = Math.floor(Math.random() * letters.length);
var magicLetter = letters[randomIndex];

var guessedLetters = [];

console.log(randomIndex);
console.log(magicLetter);

var guessesRemaining = 10;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

var buttonYes = document.getElementsByClassName("button-yes").onclick = click();
var buttonNo = document.getElementsByClassName("button-no").onclick = click();

// var winScreen = document.getElementById("winScreen") = ;

// var loseScreen = document.getElementById("loseScreen") = ;

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

        // Display number of guesses remaining under "Your Guesses Thus Far"
        document.getElementById("guessedLetters").innerHTML = guessedLetters.join(", ");
    }

    // Show pressed keys in console
    console.log(guessedLetters);

    // Check if key is the magic letter
    if (event.key.toUpperCase() === magicLetter.toUpperCase()) {
        // If it is the magic letter, win (call a win function)
        win();
        reset();
    } else {
        // If not, decrement guess count
        guessesRemaining -= 1;
    }

    // Display the number of remaining guesses under "Guesses Remaining"
    console.log("Number of guesses remaining: " + guessesRemaining);
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

    // If zero guesses left, lose (call a lose function) and reset guesses remaining
    if (guessesRemaining === 0) {
        lose();
        reset();
    }
}

function win() {
    console.log("You win!");
    // Display number of wins in browser
    var wins = parseInt(document.getElementById("winCount").innerHTML);
    wins += 1;
    document.getElementById("winCount").innerHTML = wins;

    // Display win screen
    
}

function lose() {
    console.log("You lose!");
    // Display number of losses in browser
    var losses = parseInt(document.getElementById("lossCount").innerHTML);
    losses += 1;
    document.getElementById("lossCount").innerHTML = losses;
    
    // Display lose screen

}

function reset() {
    // Reset guesses remaining
    guessesRemaining = 10;
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

    // Empty guessed letters array
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = guessedLetters.join(", ");

    // Select new magic letter
    randomIndex = Math.floor(Math.random() * letters.length);
    magicLetter = letters[randomIndex];
    console.log(magicLetter);
}

// function click() {

// }