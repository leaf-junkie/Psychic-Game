//  Create array from which letter will be randomly selected
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];
 
//  Number of wins
var wins = 0;

// Number of losses
var losses = 0;

// Number of guesses remaining
var guessesRemaining = 10;

// The letters that the user has guessed so far
var numberOfGuesses = (10 - guessesRemaining);

// Generate random number to pull associated letter from array
var randomNumber = Math.floor(Math.random() * letters.length);
var randomLetter = letters[randomNumber];

console.log(randomLetter);

// Event listener for key click
document.onkeyup = function(event) {
    var userGuess = event.key;

    if (userGuess === randomLetter) {
        wins + 1;
    }
        else {
            guessesRemaining - 1;
        }

    if (guessesRemaining === 0) {
        losses + 1;
    }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses").innerHTML = guesses;

}


//     console.log("The letter I am thinking of is " + letters.charAt(randomNumber) + ".");
// }

