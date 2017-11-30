const mongoose = require('../libs/mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	date: {
		month: {
			type: Number,
			min: 1,
			max: 12,
			required: true
		},
		year: {
			type: Number,
			required: true
		}
	},
	days: [
		{
			dayOfMonth: Number,
			dayOfWeek: Number,
			event: [{
				name: String,
				narrator: String,
				time: String,
				eventType: String
			}]
		}
	]
});

module.exports = mongoose.model('Month', schema);
