var inquirer = require("inquirer");

var Soldier (name, rank, serial) {
    this.name = name;
    this.rank = rank;
    this.serial = serial;
    
}

var Classroom = function(profName, roomNum) {
  // this.students will hold all of our student objects
  this.name = name;
  this.profName = profName;
  this.roomNum = roomNum;
  // a method that creates a student using our Student constructor.
  // It then pushes the new student object to this.students and updates this.numStudents
  this.addStudent = function(name, favoriteSub, gpa) {
    this.students.push(new Student(name, favoriteSub, gpa));
  };
