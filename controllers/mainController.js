let async = require('async');
let mainController = {};

mainController.mainPage = function (req, res) {
	res.sendfile('./public/main.html');
};

module.exports = mainController;
