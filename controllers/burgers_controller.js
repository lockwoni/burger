// Importing the needed node packages
var express = require("express");
var router = express.Router();

// Importing the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Creating the router for the app
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var burgerObj = {
			burger: data
		};
		console.log(burgerObj);
		res.render("index", burgerObj);
	});
});

router.post("/", function(req, res) {
  burger.insertOne(
    ["burger_name"], [req.body.burger_name], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

// Exporting the router
module.exports = router;