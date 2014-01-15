var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'juno',
	database: 'cicee',
	password: '5460'
});

connection.connect();

connection.query('SELECT * FROM user', function(err, rows, fields) {
	if (err) throw err;

	console.log('The solution is: ', rows);
});

connection.end();