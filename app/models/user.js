var pool = require('../../config/utils').pool();

exports.findById = function(id) {
	var user = "user====";
	pool.getConnection(function(err, connection) {
		// connected! (unless `err` is set)
		connection.query('SELECT * FROM user', function(err, rows) {
			user = rows[0];
			console.info("======callback");
			// And done with the connection.
			connection.release();
		});
	});
	console.info(user);
	return user;
};