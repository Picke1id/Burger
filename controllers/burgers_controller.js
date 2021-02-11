// SETTING DEPENDENCIES
var express = require("express");
var router = express.Router();

// IMPORTING BURGER OBJECT FROM MODELS
var burger = require("../models/burger.js");

// CREATING GET ROUTE
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// CREATING POST ROUTE
router.post("/burgers", function(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(data) {
        res.redirect("/");
    });
});

// CREATING PUT ROUTE
router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition,
        function(data) {
            if (data.changedRows === 0) {
                return res.status(404).end();
            }
            res.redirect("/");
        });
});

// EXPORTING ROUTES TO BE USED IN SERVER.JS
module.exports = router;