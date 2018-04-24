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
    inquirer.prompt([
        { 
            type:'input',
            name: 'item',
            message: 'Enter item ID you would like to buy? '
        },
        {
            type: 'input',
            name:'quantitiy',
            message: 'How many would you like to buy?'
        }
    ])  //then take in customer info with and run promise function
    .then(function(answer){    
        connection.query('SELECT stock_quantity FROM products WHERE ?',
        {
            id: answer.item
        },
        function(err, res){
            if (err) throw err;
            stock = (res[0].stock_quantity);
            quantitiyNeeded = parseInt(answer.quantity);
            id = answer.item;

            console.log('Number of items in stock: ' + stock + '\n Customer number needed: ' + quantitiyNeeded);
            console.log(quantitiyNeeded);
            if (quantitiyNeeded < stock) {
                console.log('place the order');
                updateProcuct();
                userTotal();
            } else{
                console.log('This item is out of stock ');
            }
        }
      );
    });
}

//need to tally merchandise stock
function updateProduct(){
    var update = stock - quantitiyNeeded;
    connection.query('UPDATE products SET ? WHERE ?',
    [
        {
            stock_quantity: update
        },
        {
            id: id
        },

    ],
    function(err, res) {
        if (err) throw err;
    }
);
}

//need cusotmer merchandise total

function userTotal(){
    connection.query('SELECT price FROM products WHERE ? ',
    {
        id: id
    },
    function(err, res){
        if (err) throw err;
        var price = res[0].price;
        var totoal = price * quantitiyNeeded;
        console.log('Your total purcahse is: ' = total);
    }
);

}



// update invertory quantity 

function updateQuantity() { 

}