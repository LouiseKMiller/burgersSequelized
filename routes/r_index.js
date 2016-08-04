// HOMEWORK WEEK 14 - burger
// UT BOOT CAMP
// LOUISE K MILLER
// Here is where you create all the functions that will do the routing for your app, and the logic of each route.
//
var express = require('express');
var router = express.Router();
var Burgers = require('../models')["Burgers"];


// route defined for the root of the app
// GET method redirects user to /burgers URI
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

// route defined for the /burgers URI
// GET method - selectAll callback function
router.get('/burgers', function (req, res) {
	Burgers.findAll()
	.then (function(burgers){
		console.log(JSON.stringify(burgers));

		var hbsObject = {burgers};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// route defined for the /burgers/create URI

router.post('/burgers/create', function (req, res) {
	Burgers.create({burger_name: req.body.burger_name, devoured: 0})
	.then (function(){
		res.redirect('/burgers');
	});
});

// route defined for the /burgers/update/[params] URI
// In index.handlebars, we used method-override using a query value
// to override POST with a PUT

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	Burgers.update({devoured: req.body.devoured }, {where: {id: req.params.id}})
	.then (function () {
		res.redirect('/burgers');
	});
});


module.exports = router;
