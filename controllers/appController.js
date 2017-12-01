const async = require('async');
const Months = require('../models/months');

let appController = {};

function daysInMonth(month, year) {
	return new Date(year, month, 0).getDate();
}

function getDayOfWeek(year, month, day) {
	let dayOfWeek = new Date(year, month, day);
	dayOfWeek = dayOfWeek.getDay();
	return dayOfWeek === 0 ? 7 : dayOfWeek;
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
						dayOfWeek: getDayOfWeek(req.body.date.currentYear, req.body.date.currentMonth - 1, i + 1),
						event: {
							name: 'name',
							narrator: 'narrator',
							time: 'time',
							eventType: 'type'
						}
					}
				}

				let month = new Months({date: date, days: days});
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

appController.addEvent = function (req, res) {

	Months.findOneAndUpdate({
			$and: [
				{'date.year': req.body.date.year},
				{'date.month': req.body.date.month}
			],
			'days.dayOfMonth': req.body.date.day
		}, {
			$set: {
				'days.$.event.0': req.body.event
			}
		}, {
			upsert: true,
			new: true
		},
		function (err, upd) {
			if (err) {
				console.error('>> ' + err);
				res.end();
			} else {
				res.send(upd);
			}
		});
};

module.exports = appController;
