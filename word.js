// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user 
//    is attempting to guess. That means the constructor should define:
//   * An array of `new` Letter objects representing the letters of the underlying word
//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that 
//     displays the character or an underscore and concatenate those together.
//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

var Letter = require("./letter");
var gameWords = ["St Petersbourg", "Paris", "Milan", "Barcelona", "Buenos Aires", "Singapore", "Hong Kong", "Hangzhou", "Geneva", "New York", "San Francisco"]

function Word(wordArray, spacesArray) {
    var randomName = gameWords[Math.floor(Math.random() * gameWords.length)];
    var spacesArray = [];
    randomName = randomName.toUpperCase();
    var wordArray = randomName.split('');
    this.wordArray = wordArray;
    this.spacesArray = spacesArray;
    this.arrayify = function () {
        for (var i = 0; i < wordArray.length; i++) {
            if (wordArray[i] != " ") {
                spacesArray.push("_");
            } else {
                spacesArray.push(" ");
            }
            // console.log(spacesArray);
        }
        console.log(this.spacesArray.join(" "));
        // console.log(this.wordArray);
    }
}
module.exports = Word;
