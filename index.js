const express = require("express");
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000

///
/// Middleware
///
app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({
	extended: true
}));

///
/// Configuration
///
app.engine('handlebars', expressHandlebars.engine({
	defaultLayout: 'main',
  }));
app.set('view engine', 'handlebars');
app.set('views', './views');

///
/// Routing
///
app.get('/', function(request, response) {
	response.render('home');
});

///
/// Setup
///
app.listen(port, function() {
	console.log("Server is running at http://localhost:3000/")
})