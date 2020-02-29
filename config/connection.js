var express = require("express");
var mysql = require("mysql");
var app = express;

var connection = mysql.createConnection({
    host: 'tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'i0ch8qpvagjnvqba',
    password: 's367nvthu5gaesqk',
    database: 'dg88kdxu6zayvopl'
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