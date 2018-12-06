// Dependencies
var path = require('path');

// Import the list of starter entries
var starterPokemon = require('../data/friends.js');

// Export API routes
module.exports = function(app) {

	// Total list of starter entries
	app.get('/api/friends', function(req, res) {
		res.json(starterPokemon);
	});

	// Add new starter entry
	app.post('/api/friends', function(req, res) {
		// The user input object
		var userInput = req.body;
		var userResponses = userInput.scores;

		// Compute starter poke match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing starter pokemon in the array
		for (var i = 0; i < starterPokemon.length; i++) {

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(starterPokemon[i].scores[j] - userResponses[j]);
			}

			// If lowest difference, record the starter match
			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = starterPokemon[i].name;
				matchImage = starterPokemon[i].photo;
			}
		}

		// Add new user
		starterPokemon.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};