import React, {Component} from 'react';
import Week from "./week";

export default class Calendar extends Component {


	constructor(props) {
		super(props);
		this.state = {currentMonth: null};
		this.renderWeeks = this.renderWeeks.bind(this);
	}

	getCurrentMonth() {
		const self = this;
		const currentMonth = new Date().getMonth() + 1;
		const currentYear = new Date().getFullYear();
		const body = JSON.stringify({
			date: {
				currentMonth,
				currentYear
			}
		});

		fetch('/app/getCurrentMonth', {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: body,
			credentials: 'include'
		}).then(function (res) {
			return res.json();
		}).then(function (res) {
			console.dir(res);
			self.setState({currentMonth: res});
			return res;
		}).catch(function (err) {
			console.error(`>>err: ${err}`);
		});
	};

	renderWeeks() {
		if (this.state.currentMonth !== null) {
			let weeks = [];
			let week = [];
			this.state.currentMonth.days.map(function(day, i) {
				if (day.dayOfWeek !== 7) {
					week[day.dayOfWeek] = day;
				} else {
					week[day.dayOfWeek] = day;
					weeks.push(week);
					week = [];
				}
			});
			console.log(weeks) //TODO weeks.length == 8
			return weeks.map(function (week, i) {
				return <Week week={week} key={i}/>
			});
		}
	}

	componentDidMount() {
		this.getCurrentMonth()
	};

	render() {
		return (
			<div className="calendar">
				{this.renderWeeks()}
			</div>
		);
	}
}
