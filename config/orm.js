var connection = require("./connection.js")

function listQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];
  
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }
  
    return arr.toString();
  }
  

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, column, value, cb) {
        var queryString = "INSERT INTO " + table;
        
        queryString += " (";
        queryString += column.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += listQuestionMarks(value.length);
        queryString += ") ";

        
        
        // + " (" + column.toString() + ") " + "VALUES (" + printQuestionsMarks(value.length) + ") ";

    // var queryString = "INSERT INTO " + table;

    // queryString += " (";
    // queryString += cols.toString();
    // queryString += ") ";
    // queryString += "VALUES (";
    // queryString += printQuestionMarks(vals.length);
    // queryString += ") ";

    
        console.log(queryString);

        connection.query(queryString, value, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

    // updateOne()

};






module.exports = orm;