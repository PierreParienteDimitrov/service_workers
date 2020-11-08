const path = require('path');

module.exports = function (app) {
	app.get('*', (req, res) => {
		res.send(path.join(__dirname, '../public/index.html'));
	});
};
