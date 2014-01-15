var user = require('../models/user');

exports.index = function(req, res) {
	var u = user.findById(1);
	res.render('index', {
		title: u.username
	});
};