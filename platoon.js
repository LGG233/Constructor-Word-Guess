// requiring our Student module exported from student.js
var Soldier = require("./soldier.js");

// constructor function for creating classroom objects
var Platoon = function(city, theater) {
  // this.soldiers will hold all of our soldier objects
  this.soldiers = [];
  this.city = city;
  this.theater = theater;
  // a method that creates a student using our Student constructor.
  // It then pushes the new student object to this.students and updates this.numStudents
  this.addSolider = function(name, rank, serial) {
    this.soldiers.push(new Soldier(name, rank, serial));
  };
  // this method will tell you how many students are in the class
  this.soldierCount = function() {
    return this.soldiers.length;
  };
};

// exporting our Classroom constructor. We will require it in main.js
module.exports = Platoon;
