// SETTING DEPENDENCIES
var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-Override");

// CREATING APP
var app = express();

// SETTING PORT
var PORT = process.env.PORT || 8080;

// TO UTILIZE CONTENT IN PUBLIC FOLDER
app.use(express.static("public")); 

//TO PARSE REQUEST BODY AS JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TO UTITLIZE HANDLEBARS LAYOUTS
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// TO ALLOW UTILIZATION OF PUT REQUEST IN PLACES WHERE CLIENT DOESN'T SUPPORT IT
app.use(methodOverride('_method')); 

// IMPORTING AND CALLING ROUTES
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// SETTING SERVER TO LISTEN FOR PORT
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});