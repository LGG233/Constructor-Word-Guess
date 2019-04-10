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
        console.log("You guessed: " + newLetter.letter);
        // console.log("Your guess is in the word: " + newLetter.guessed);
        console.log(gameSpacesArray.join(" "));
        console.log("Used letters: " + usedLetters.join(" "));
        if (count > 9) {
            console.log("Too many tries. You lose")
            console.log(gameWordArray.join(" "));
            return
        } else if (gameSpacesArray.includes("_")) {
            console.log("Not there yet - keep guessing");
            Getinput(gameWordArray, gameSpacesArray);
        } else {
            console.log("Nice job! You won!");
        }
    })
}

// var pickedLetter;
// var letterStatus = false;

// constructor function used to create letter objects
// function Letterchoice(pickedLetter) {
//     this.letter = pickedLetter;
//     inquirer.prompt([
//         {
//             name: "letter",
//             message: "Please guess a letter"
//         }
//     ]).then(function (answer) {
//         // initializes the variable newProgrammer to be a programmer object which will take
//         // in all of the user's answers to the questions above
//         var newLetterchoice = new Letterchoice(answer.word, answer.letter);
//         pickedLetter = answer.letter;
//         console.log(answer.letter);
//         console.log(pickedLetter);
//         console.log(newLetterchoice);
//         process.exit();
//     });
// };

// // runs inquirer and asks the user a series of questions whose replies are
// // stored within the variable answers inside of the .then statement.

// module.exports = Letterchoice;

    // evalLetter()

    // function evalLetter() {
    //     for (var i = 0; i = gameWord.length; i++) {
    //         if (gameWord[i] === pickedLetter) {
    //             gameWord[i] = pickedLetter;
    //         } else {
    //             gameWord[i] = "_";
    //         }
    //         console.log(gameWord[i]);
    //     }
    // }
// });
// printInfo method is run to show that the newProgrammer object was successfully created and filled
// newLetterchoice.printInfo();
//   });

//   if (!letterStatus) {
//     pickedLetter === "_";
// }
// else {
//     pickedLetter = pickedLetter;
// }




// creates the printInfo method and applies it to all programmer objects
// Programmer.prototype.printInfo = function() {
//   console.log("Your letter: " + this.pickedLetter);
// };

// function chooseLetter() {
//     document.onkeydown = function (event) {
//         $("#user-tries").text("You have used " + userTries + " of 15 guesses");
//         if (event.keyCode >= 65 && event.keyCode <= 90) {
//             userChoice = event.key;
//             userChoice = userChoice.toUpperCase();
//             for (var i = 0; i < usedLetters.length; i++) {
//                 if (userChoice === usedLetters[i]) {
//                     return alert("You've already picked that letter. Try again.")
//                 }
//             }
//             usedLetters.push(userChoice);
//             userTries = userTries + 1;
//             if (randomName.includes(userChoice)) {
//                 for (m = 0; m < randomName.length; m++) {
//                     if (userChoice === nameArray[m]) {
//                         letterPicked = "true";
//                         spacesArray[m] = userChoice.toUpperCase();
//                         document.getElementById("gameBoard").innerText = "";
//                         spacesArray.forEach(y => document.getElementById("gameBoard").append(y));
//                     }
//                 }
//             }
//             else {
//                 document.getElementById("used-letters").append(userChoice.toUpperCase() + " ");
//             }
//             document.getElementById("remaining").innerHTML = "You have used " + userTries + " of 15 guesses.";
//             evaluateScore();
//         } else {
//             alert("Please pick a letter from A to Z");
//         }
//     }
// }

