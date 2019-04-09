var inquirer = require("inquirer");
// requiring our Platoon module exported from platoon.js
var Platoon = require("./platoon.js");
Troop();

// creating and storing a new Troop object
function Troop() {
    inquirer.prompt([
        {
            name: "name",
            message: "Please provide the last name of the new soldier"
        },
        {
            name: "rank",
            message: "Please provide the rank of the new soldier"
        },
        {
            name: "serial",
            message: "Please provide the four-digit serial number of the new soldier"
        },
        {
            name: "city",
            message: "Please provide the city in which the new soldier is based"
        },
        {
            name: "theater",
            message: "Please provide the theater to which the new soldier is assigned"
        }
    ]).then(function (answer) {
        var theater = answer.theater;
        var city = answer.city;
        var name = answer.name;
        var rank = answer.rank;
        var serial = answer.serial;
        var newRecord = new Platoon(city, theater);
        newRecord.addSolider(name, rank, serial);
        console.log(newRecord);
    })
}
