// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
//   * Randomly selects a word and uses the `Word` constructor to store it
//   * Prompts the user for each guess and keeps track of the user's remaining guesses

var Letter = require("./letter");
var inquirer = require("inquirer");
var Word = require("./word.js");
var spacesArray = [];
var guessed = true;
var count = 0;
var usedLetters = [];
var gameWordArray = [];
var gameSpacesArray = [];

gameSetup();
function gameSetup() {
    console.clear();
    count = 0;
    usedLetters = [];
    console.log("\r\n\r\n\r\nWelcome to 'Hangman Around The World.' The words you have to guess are names of cities from around the world. \r\nYou have ten guesses per city. Good luck! Here is your city to guess:\r\n");
    var newWord = new Word();
    newWord.arrayify()
    var gameWordArray = newWord.wordArray;
    var gameSpacesArray = newWord.spacesArray;
    Getinput(gameWordArray, gameSpacesArray);
}
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
        console.log("\r\n\r\n\r\n" + "You have made " + count + " guesses.\r\n\r\n\r\r---------------------------\r\n\r\n" + gameSpacesArray.join(" ") + "\r\n\r\n---------------------------\r\n\r\nUsed letters: " + usedLetters.join(" ") + "\r\n\r\n---------------------------\r\n");
        if (count > 9) {
            console.log("Too many tries. You lose\r\n\r\n" + gameWordArray.join(" "));
            postGame();
        } else if (gameSpacesArray.includes("_")) {
            console.log("Not there yet - keep guessing\r\n\r\n---------------------------\r\n");
            Getinput(gameWordArray, gameSpacesArray);
        } else {
            console.log("Nice job! You won!");
            postGame();
        }
    })
}
function postGame() {
    inquirer.prompt([
        {
            type: "list",
            name: "gameEnd",
            message: "Would you like to play again?",
            choices: ["Play again", "Exit"]
        }
    ]).then(function (answer) {
        if (answer.gameEnd === "Play again"){
            gameSetup();
        } else {
            console.log("Thanks for playing!");
            return
        }
    })    
}
