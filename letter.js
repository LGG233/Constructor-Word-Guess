// * **Letter.js**: 
//   Contains a constructor, Letter. This constructor should be able to either display an underlying character or a 
//   blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
//   * A string value to store the underlying character for the letter
//   * A boolean value that stores whether that letter has been guessed yet
//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
var guessedValue = 0;

function Letter(letter, guessed) {
    // this.guessed = false;
    this.letter = letter.toUpperCase();
    this.checkLetter = function (wordArray, spacesArray) {
        var guessedValue = 0;
        for (var i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === this.letter) {
                guessedValue = guessedValue++
                spacesArray[i] = this.letter;
            }
        }
        if (guessedValue > 0) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;

// if (randomName.includes(userChoice)) {
//     for (m = 0; m < randomName.length; m++) {
//         if (userChoice === nameArray[m]) {
//             letterPicked = "true";
//             spacesArray[m] = userChoice.toUpperCase();
//             document.getElementById("gameBoard").innerText = "";
//             spacesArray.forEach(y => document.getElementById("gameBoard").append(y));
//         }
//     }
// }


// var pickedLetter;
// var letterStatus = false;

// // constructor function used to create letter objects
// function Evaluateletter(letter, wordArray, letterStatus) {
//     this.letter = letter.toUpperCase();
//     this.array = wordArray;
//     this.status = letterStatus;
//     function letterEval() {
//         for (var i = 0; i < wordArray.length; i++) {
//             if (wordArray[i] === letter) {
//                 letterStatus = true
//             }
//         }

//     }
//     inquirer.prompt([
//         {
//             name: "word",
//             message: "Please choose a word"
//         },
//         {
//             name: "letter",
//             message: "Please choose a letter"
//         }
//     ]).then(function (answer) {
//         // initializes the variable newProgrammer to be a programmer object which will take
//         // in all of the user's answers to the questions above
//         var newLetterchoice = new Letterchoice(answer.word, answer.letter);
//         pickedLetter = answer.letter;
//         console.log(answer.word);
//         console.log(answer.letter);
//         console.log(pickedLetter);
//         console.log(newLetterchoice);
//         var gameWord = answer.word;
//         console.log(gameWord);
//         process.exit();
//     });
// };

// // runs inquirer and asks the user a series of questions whose replies are
// // stored within the variable answers inside of the .then statement.


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

