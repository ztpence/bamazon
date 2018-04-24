var inquirer = require('inquirer');
var mysql = require('mysql');
require('console.table')

var id;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'bamazon'
});

//create connection function err to handle errors upfront

connection.connect(function(err){
    if (err) throw err;
    console.log(connection.threadID + 'id connected ');
    productForSale();
});

//create function for product on sale with connection query

function productForSale() {
    connection.query('SELECT * FROM products', function(err, res){
        if (err) throw err;
        else{
            console.log('Products for Sale: ');
            for (var i = 0; i < res.length; i++){
                console.log(res[i].id + '. ' + res[i].product_name + '| ' + res[i].price);
            }
          inquireUser();
        }
    });
}

//neeed to inquirer customer with questions
function inquireUser() {

}

//then take in customer info with and run promise function

//need to tally merchandise stock

//need cusotmer merchandise total

// update invertory quantity 