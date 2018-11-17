//Letter choices available
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var lettersToGuess = null;

//Computer Selection
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
// guesses = guesses || 9
function updateGuessesLeft() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};