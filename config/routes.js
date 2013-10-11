/*!
 * Module dependencies.
 */

var async = require('async');

/**
 * Controllers
 */

var home = require('../app/controllers/home');


/**
 * Expose routes
 */

module.exports = function(app) {
	
	//home routes
	app.get('/', home.index);

};