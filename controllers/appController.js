const async = require('async');
const Months = require('../models/months');

let appController = {};

// appController.getUserInfo = function (req, res) {
// 	let userInfo = {};
//
// 	async.waterfall([
// 		function (callback) {
// 			User.findOne({
// 				_id: req.session.user
// 			}, callback);
// 		},
// 		function (user, callback) { //1st arg: user or null
// 			if (user) {
// 				userInfo = {
// 					'email': user.email,
// 					'firstName': user.firstName,
// 					'lastName': user.lastName,
// 					'isManager': user.isManager
// 				}
// 				callback(null, userInfo);
// 			} else {
// 				callback('user not found');
// 			}
// 		}
// 	], function (err, userInfo) {
// 		if (err) {
// 			console.error('>> ' + err);
// 			res.redirect('/login');
// 		} else {
// 			res.json(userInfo);
// 		}
// 	});
// };

function daysInMonth(month, year) {
	return new Date(year, month, 0).getDate();
}

appController.getCurrentMonth = function (req, res) {

	async.waterfall([
		function (callback) {
			Months.findOne({
				$and: [
					{'date.month': req.body.date.currentMonth},
					{'date.year': req.body.date.currentYear}
				]
			}, callback);
		},
		function (month, callback) {
			if (month) {
				callback(null, month);
			} else {
				let date = {
					month: req.body.date.currentMonth,
					year: req.body.date.currentYear
				};
				let daysAmount = daysInMonth(req.body.date.currentMonth, req.body.date.currentYear);
				let days = [];
				for (let i = 0; i < daysAmount; i++) {
					days[i] = {
						dayOfMonth: i + 1,
						events: []
					}
				}

				let month = new Months({date: date, days: days});
				// console.log(`>>month: ${month}`);

				month.save(function (err) {
					if (err) {
						callback(err);
					} else {
						callback(null, month);
					}
				});
			}
		}
	], function (err, month) {
		if (err) {
			console.error('>> ' + err);
			res.end();
		} else {
			res.json(month);
		}
	});

};

module.exports = appController;
