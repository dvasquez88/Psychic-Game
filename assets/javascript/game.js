//when the game starts
var guessesLeft = 9;
var numGuesses = 9;
var wins = 0;
var losses = 0;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var guessChoices = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


document.onkeyup = function (event) {
    var userGuess = event.key;
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(computerGuess);


    if (options.indexOf(userGuess) > -1) {

        //when the player guesses the same letter as the computer
        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            guessChoices = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }

        //when the players selection is not the same letter as the computers
        else {
            numGuesses--;
            guessChoices.push(userGuess)

            //when the guesses hits zero, the game resets
            if (numGuesses === 0) {
                numGuesses = 9;
                losses++;
                guessChoices = [];
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }

        }

        var html =
            "<h1> The Psychic Game </h1>" +
            "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + numGuesses + "</p>" +
            "<p>Your Guesses so far: " + guessChoices.join(",") + "</p>";

        console.log(document.querySelector("#game"))
        document.querySelector("#game").innerHTML = html;
    }
};