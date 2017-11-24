const async = require('async');
const mainController = {};
const path = require('path');

mainController.mainPage = function (req, res) {
	res.sendFile(path.resolve('src/main.html'));
};

module.exports = mainController;
