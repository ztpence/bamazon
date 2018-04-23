var inquirer = require('inquirer');
var mysql = require('mysql');
require('console.table')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'bamazon'
});

//create connection function

//create function for merchandise on sale with connection query

//neeed to inquirer customer with questions

//then take in customer info with and run promise function

//need to tally merchandise stock

//need cusotmer merchandise total

// update invertory quantity 