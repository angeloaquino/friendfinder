// Dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {

	// Home page 
	//look at diagram sent by Angel
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};