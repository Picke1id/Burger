// SETTING DEPENDENCIES
var orm = require("../config/orm.js");

// CREATING BURGER OBJECT TO BE USED IN CONTROLLER
var burger = {

    // FUNCTION TO SELECT BURGERS FROM DATABASE
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    // FUNCTION TO INSERT NEW BURGER NAME INTO DATABASE
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    // FUNCTION TO UPDATE EXISTING BURGER IN DATABASE
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }

};

// EXPORTING BURGER OBJECT 
module.exports = burger;