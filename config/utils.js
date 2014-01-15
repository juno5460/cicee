var mysql = require('mysql');
var env = process.env.NODE_ENV || 'development',
	config = require('../config/config')[env];

exports.pool = function() {
	var pool = mysql.createPool({
		host: config.dbHost,
		database: config.dbName,
		user: config.dbUser,
		password: config.dbPassword,
		waitForConnections: config.dbWaitForConnections,
		connectionLimit: config.dbConnectionLimit,
		queueLimit: config.dbQueueLimit
	});
	return pool;
};