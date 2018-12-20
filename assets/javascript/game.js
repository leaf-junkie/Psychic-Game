// Create event listener for when a key is pressed
document.onkeyup = keyUpHandler;

// Generate random magic letter
var letters = "abcdefghijklmnopqrstuvwxyz";
var randomIndex = Math.floor(Math.random() * letters.length);
var magicLetter = letters[randomIndex];

var guessedLetters = [];

// console.log(letters.toLowerCase());
console.log(randomIndex);
console.log(magicLetter);

var guessesRemaining = 10;

// Get input from user
function keyUpHandler(event) {
    // Add key to guessedLetters array
    console.log(guessedLetters.push(event.key));
    // Display guesses in the browser
    document.getElementById("guessedLetters").innerHTML += event.key;

    // Check if key is the magic letter
    if (event.key === magicLetter) {
        // If it is, win (call a win function)
        win(); 
    } else {
        // If not, decrement guess count
        guessesRemaining -= 1;
        // Display number of guesses remaining under "Guesses Remaining"
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    }

    // If zero guesses left, lose (call a lose function)
    if (guessesRemaining === 0) {        
        lose();
        // Reset guesses remaining - could have here or on the win and lose functions
        // document.getElementById("guessesRemaining").counterReset;
    }
}

function win() {
    console.log("You win!");
    // Display number of wins in browser
    var wins = parseInt(document.getElementById("winCount").innerHTML);
    wins += 1;
    document.getElementById("winCount").innerHTML = wins;
}

function lose() {
    console.log("You lose!");
    // Display number of losses in browser
    var losses = parseInt(document.getElementById("lossCount").innerHTML);
    losses += 1;
    document.getElementById("lossCount").innerHTML = losses;
}

// Ignore redundant input from user
var a = letters;

for (a = 0; a )    
    // On key press, check if the letter has already been pressed
    
        // If it has not been pressed, return true

        // If it has been pressed, return false
}

// reset(); 
// var reset = function() {
//     a = 10;
//     document.getElementById("guessesRemaining").innerHTML = a;
// }