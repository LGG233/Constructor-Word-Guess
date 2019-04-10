// * **Letter.js**: 
//   Contains a constructor, Letter. This constructor should be able to either display an underlying character or a 
//   blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
//   * A string value to store the underlying character for the letter
//   * A boolean value that stores whether that letter has been guessed yet
//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
var Word = require("./word.js");
var guessedValue = 0;
var wrong = true;
var usedLetters = [];

function Letter(letter, guessed) {
    // this.guessed = false;
    this.letter = letter.toUpperCase();
    this.wordArray = Word.wordArray;
    this.spacesArray = Word.spacesArray;
    this.checkLetter = function (gameWordArray, gameSpacesArray, usedLetters) {
        console.log("this is the gameWordArray in letters.js: " + gameWordArray);
        console.log("this is the gameSpacesArray in letters.js: " + gameSpacesArray);
        // guessedValue = 0;
        for (var i = 0; i < gameWordArray.length; i++) {
            wrong = true;
            if (gameWordArray[i] === this.letter) {
                // guessedValue = guessedValue++
                gameSpacesArray[i] = this.letter;
                wrong = false;
            } else {
                wrong = true;
            }
        }
        console.log(wrong);
        if (wrong) {
            usedLetters.push(this.letter)
        }
    }
}
module.exports = Letter;

