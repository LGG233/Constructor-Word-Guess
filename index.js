// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
//   * Randomly selects a word and uses the `Word` constructor to store it
//   * Prompts the user for each guess and keeps track of the user's remaining guesses

var Letter = require("./letter");
var inquirer = require("inquirer");
var Word = require("./word.js");
var gameWords = ["St Petersbourg", "Paris", "Milan", "Barcelona", "Buenos Aires", "Singapore", "Hong Kong", "Hangzhou", "Geneva", "New York", "San Francisco"]
var spacesArray = [];
var guessed = true;
var count = 0;
var usedLetters = [];
var gameWordArray = [];
var gameSpacesArray = [];


gameSetup();
function gameSetup() {
    console.clear();
    console.log("Welcome to 'Hangman Around The World.' The words you have to guess are names of cities from around the world. \r\nYou have ten guesses per city. Good luck! Here is your city to guess:");
    var newWord = new Word();
    newWord.arrayify()
    var gameWordArray = newWord.wordArray;
    var gameSpacesArray = newWord.spacesArray;
    // console.log("this is the newWord.wordArray: " + newWord.wordArray);
    // console.log("this is the gameWordArray: " + gameWordArray);
    // console.log("this is the gameSpacesArray: " + gameSpacesArray);
    Getinput(gameWordArray, gameSpacesArray);
    // Getinput();
}
// function Getinput() {
function Getinput(gameWordArray, gameSpacesArray) {
    inquirer.prompt([
        {
            name: "letter",
            message: "Please enter a letter"
        }
    ]).then(function (answer) {
        var letter = answer.letter;
        var newLetter = new Letter(letter);
        count = count + 1
        newLetter.checkLetter(gameWordArray, gameSpacesArray, usedLetters);
        console.clear();
        console.log("\r\n\r\n");
        console.log("You have made " + count + " guesses.\r\n\r\r---------------------------\r\n");
        // console.log("You guessed: " + newLetter.letter); 
        console.log(gameSpacesArray.join(" ") + "\r\n\r\n---------------------------\r\n");
        console.log("Used letters: " + usedLetters.join(" ") + "\r\n\r\n---------------------------\r\n");
        if (count > 9) {
            console.log("Too many tries. You lose")
            console.log(gameWordArray.join(" "));
            return
        } else if (gameSpacesArray.includes("_")) {
            console.log("Not there yet - keep guessing\r\n\r\n---------------------------\r\n");
            Getinput(gameWordArray, gameSpacesArray);
        } else {
            console.log("Nice job! You won!");
        }
    })
}

