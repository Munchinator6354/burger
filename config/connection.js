var express = require("express");
var mysql = require("mysql");
var app = express;

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456789',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if(!!err) {
        console.log("Error connecting to mysql db" + err);
    }
    else {
        console.log("Connection Success");
    }
});

module.exports = connection;