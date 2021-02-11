// IMPORTING MYSQL CONNECTION FROM CONNECTION.JS
var connection = require("../config/connection.js");

// HELPER FUNCTION FOR MYSQL SYNTAX
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    } 
    return arr.toString();
}

// HELPER FUNCTION TO CONVERT OBJECT KEY/VALUE PAIRS TO MYSQL SYNTAX
function objToSql(ob) {
    var arr = [];

    for(var key in ob) {
        var value = ob[key];

        arr.push(key + "=" + value);
    } 
    return arr.toString();
}

// CREATING ORM OBJECT TO PERFORM MYSQL QUERIES
var orm = {

    // FUNCTION TO SELECT BURGERS FROM DATABASE
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // FUNCTION TO INSERT NEW BURGER NAME INTO DATABASE
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // FUNCTION TO UPDATE EXISTING BURGER IN DATABASE
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// EXPORTING ORM OBJECT TO BE USED IN MODELS
module.exports = orm;