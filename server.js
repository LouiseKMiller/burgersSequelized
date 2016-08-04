// HOMEWORK WEEK 15 - burgerSequelized
// UT BOOT CAMP
// LOUISE K MILLER

// ============================================================
// DEPENDENCIES
// Node Package Modules
// ============================================================

// import Node File System module express - a fast, unopinionated, minimalist web framework
var express = require('express');
// import Node File System module body-parser - body parsing middleware.  It parses incoming request bodies in a middleware before your handlers
var bodyParser = require('body-parser');
// import Node File System module method-override - lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
var methodOverride = require('method-override');
//======================================
// Bring in the Sequelize models and sync
var Burgers = require('./models')["Burgers"]
Burgers.sync({force:true})
.then(function(){
	Burgers.bulkCreate([
	{burger_name: 'Austin\'s Favorite Burger'},
	{burger_name: 'Porky\'s Demise'},
	{burger_name:'Double Bacon Cheese Burger'},
	{burger_name: 'Veggie Burger'},
	{burger_name: 'Old Fashioned Cheese Burger'}
	])
});

var app = express();




// ====================================================
// Serve static content for the app from the "public" directory in the application directory.
// express.static is express's (only) built-in middleware
// It is used to serve static files such as images and html, css and js files.
// The process.cwd method return the current working directory of the node.js process
app.use(express.static(process.cwd() + '/public'));

// returns middleware that parses URL encoded bodies
//
app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// create an instance of express handlebars
// this allows access to the full API
//
var exphbs = require('express-handlebars');

// tell express to use handlebars as a template engine
// A template engine enables you to use static template files
// in your application.  At runtime, the template engine replaces
// variables in a template file with actual values, and transforms the template
// in to an HTML file sent to the client.
// app.engine(ext, callback) method allows you to create your own template engine
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
// register the template engine
app.set('view engine', 'handlebars');

// local dependency - routes = express.router for all routes
var routes = require('./routes/r_index.js');
// bind routes to root (WHY IS THIS NEEDED IF WE'VE REQUIRED THE CONTROLLER.JS FILE?)
app.use('/', routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT);
