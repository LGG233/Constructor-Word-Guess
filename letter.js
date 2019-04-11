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
    this.letter = letter.toUpperCase();
    this.wordArray = Word.wordArray;
    this.spacesArray = Word.spacesArray;
    this.checkLetter = function (gameWordArray, gameSpacesArray, usedLetters) {
        usedLetters.push(this.letter)
        for (var i = 0; i < gameWordArray.length; i++) {
            if (gameWordArray[i] === this.letter) {
                gameSpacesArray[i] = this.letter;
            }
            if (wrong) {
            }
        }
    }
}
module.exports = Letter;

