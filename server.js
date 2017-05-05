// Importing the needed node packages
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

var port = 3000;

// Serving static content for the app from the "public" directory in the application directory
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Setting Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing routes and giving the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});