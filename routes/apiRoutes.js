const db = require('../models');

module.exports = function (app) {
	app.get('/api/posts', function (req, res) {
		db.Post.find({}).then((dbPosts) => {
			res.json(dbPosts);
		});
	});
};
