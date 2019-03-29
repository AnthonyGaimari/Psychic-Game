var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 10;
var guessChoices = [];

document.onkeyup = function (event) {

        var playersGuess = event.key;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


        if (options.indexOf(playersGuess) > -1) {

                if (playersGuess === computerGuess) {
                        wins++;
                        numGuesses = 10;
                        guessChoices = [];
                        console.log(guessChoices);
                        console.log(playersGuess);
                }

                if (playersGuess != computerGuess) {
                        numGuesses--;
                        guessChoices.push(playersGuess);
                        console.log(computerGuess);
                }

                if (numGuesses === 0) {

                        numGuesses = 10;
                        losses++;
                        guessChoices = [];
                }

                var html =
                        "<h1> The Psychic Game </h1>" +
                        "<p>Guess what letter I'm thinking of!</p>" +
                        "<p>Wins: " + wins + "</p>" +
                        "<p>Losses: " + losses + "</p>" +
                        "<p>Guesses Left: " + numGuesses + "</p>" +
                        "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

                document.querySelector("#game").innerHTML = html;


        }
};

