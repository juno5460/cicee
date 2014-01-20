var pool = require('../../config/utils').pool();

exports.index = function(req, res) {
	pool.getConnection(function(err, connection) {
		// connected! (unless `err` is set)
		connection.query('SELECT * FROM user', function(err, rows) {
			var u = rows[0];
			res.render('index', {
				title: u.username
			});
			// And done with the connection.
			connection.release();
		});
	});
};