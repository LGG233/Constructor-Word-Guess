// **Instructions**
// * Within your groups you are going to be creating a Node application called "Great-Bay" which allows users to create and bid on assorted items, tasks, jobs, or projects.
// * The basic application is fairly simple: Upon loading up the program, the user is prompted on whether they would like to "POST AN ITEM" or "BID ON AN ITEM"
// * If the user selects "POST AN ITEM" they are prompted for an assortment of information regarding the item and then that information is added to the database so that others can bid on it
// * If the user selects "BID ON AN ITEM" they are shown a list of all available items and then are prompted to select what they would like to bid on. The console then asks them how much they would like to bid, and their bid is compared to the previous highest bid. 
// If their bid is higher, inform the user of their success and replace the previous bid with the new one. If their bid is lower (or equal), inform the user of their failure and boot them back to the selection screen.
// * Once your group has put together the basic application, it's time to test your collective skills on some additional functionality, or "addons". Remember to take into consideration the amount of time you have been given when choosing what addons you would like to tackle.

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "trilogy",

    // Your password
    password: "password123",
    database: "auction_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createEntry();
});

function createEntry() {
    inquirer.prompt([
        {
            item: "item",
            message: "What do you want to add: item, job, project, or task?"
        },
        {
            name: "name",
            message: "Please enter the name"
        },
        {
            description: "description",
            message: "Please provide a brief description"
        },
        {
            price: "price",
            message: "Please name your price"
        }
    ]).then(function (answer) {
        console.log("Inserting a new product...\n");
        var query = connection.query(
            "INSERT INTO items SET ?",
            {
                item: answer.item,
                name: answer.name,
                description: answer.description,
                price: answer.price
            },
            function (err, res) {
                console.log(res.affectedRows + " product inserted!\n");
                // Call updateProduct AFTER the INSERT completes
                // updateProduct();
            }
        );

        // logs the actual query being run
        console.log(query.sql);
    })
}

// function updateProduct() {
//             console.log("Updating all Rocky Road quantities...\n");
//             var query = connection.query(
//                 "UPDATE products SET ? WHERE ?",
//                 [
//                     {
//                         quantity: 100,
//                     },
//                     {
//                         flavor: "Rocky Road"
//                     }
//                 ],
//                 function (err, res) {
//                     console.log(res.affectedRows + " products updated!\n");
//                     // Call deleteProduct AFTER the UPDATE completes
//                     deleteProduct();
//                 }
//             );

//             // logs the actual query being run
//             console.log(query.sql);
//         }

// function deleteProduct() {
//             console.log("Deleting all strawberry icecream...\n");
//             connection.query(
//                 "DELETE FROM products WHERE ?",
//                 {
//                     flavor: "strawberry"
//                 },
//                 function (err, res) {
//                     console.log(res.affectedRows + " products deleted!\n");
//                     // Call readProducts AFTER the DELETE completes
//                     readProducts();
//                 }
//             );
//         }

// function readProducts() {
//             console.log("Selecting all products...\n");
//             connection.query("SELECT * FROM products", function (err, res) {
//                 if (err) throw err;
//                 // Log all results of the SELECT statement
//                 console.log(res);
//                 connection.end();
//             });
//         }