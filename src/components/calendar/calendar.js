import React, {Component} from 'react';
import WeekComponent from "./week/week";

import {CalendarWrapper, Calendar} from './style';
import WeekdayNamesComponent from "./weekdayNames/weekdayNames";

export default class CalendarComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {currentMonth: null};

		this.renderWeeks = this.renderWeeks.bind(this);
		this.getCurrentMonth = this.getCurrentMonth.bind(this);
		this.modalOpen = this.modalOpen.bind(this);
		this.modalClose = this.modalClose.bind(this);
		this.modalCloseOutside = this.modalCloseOutside.bind(this);
		this.createAndClose = this.createAndClose.bind(this);
		this.setChosenDay = this.setChosenDay.bind(this);
	}

	modalOpen(event) {
		this.refs.modal.style.display = "block";
		this.refs.time.value = '';
		this.refs.type.value = '';
		this.refs.narrator.value = '';
		this.refs.name.value = '';
		this.refs.time.focus();
	};

	modalClose() {
		this.refs.modal.style.display = "none";
	};

	modalCloseOutside(event) {
		// event.stopPropagation();
		if (event.target === this.refs.modal) {
			this.refs.modal.style.display = "none";
		}
	};

	createAndClose(event) {
		this.addEvent();
		this.modalClose();
	};

	setChosenDay(day) {
		this.setState({chosenDay: day})
	};

	addEvent() {
		const self = this;
		console.log(this.state.chosenDay)

		let body = {
			date: {
				day: this.state.chosenDay,
				month: this.state.currentMonth.date.month,
				year: this.state.currentMonth.date.year,

			},
			event: {
				name: this.refs.name.value,
				narrator: this.refs.narrator.value,
				time: this.refs.time.value,
				eventType: this.refs.type.value
			}
		};
		body = JSON.stringify(body);

		fetch('/app/addEvent', {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: body,
		}).then(function (res) {
			return res.json();
		}).then(function (res) {
			console.log('addEvent:')
			console.dir(res);
			self.setState({currentMonth: res});
			return res;
		}).catch(function (err) {
			console.error(`>>err: ${err}`);
		});
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
			// console.dir(res);
			self.setState({currentMonth: res});
			return res;
		}).catch(function (err) {
			console.error(`>>err: ${err}`);
		});
	};

	renderWeeks() {
		const self = this;
		if (this.state.currentMonth !== null) {
			let weeks = [];
			let week = new Array(7).fill(null);
			this.state.currentMonth.days.map(function (day, i, days) {
				if (day.dayOfWeek !== 7) {
					week[day.dayOfWeek - 1] = day;
					if (i === days.length - 1) { //on last day of month
						weeks.push(week);
						week = new Array(7).fill(null);
					}
				} else { //on sunday
					week[day.dayOfWeek - 1] = day;
					weeks.push(week);
					week = new Array(7).fill(null);
				}
			});

			// console.log(weeks);
			return weeks.map(function (week, i) {
				return <WeekComponent week={week} key={i} modalOpen={self.modalOpen} setChosenDay={self.setChosenDay}/>
			});
		}
	}

	componentDidMount() {
		this.getCurrentMonth()
	};

	render() {
		return (
				<CalendarWrapper>
					<Calendar>
						<WeekdayNamesComponent/>
						{this.renderWeeks()}
					</Calendar>

					{/* <!-- The Modal --> */}
					<div ref="modal" onClick={this.modalCloseOutside} className="modal">
						{/* <!-- Modal content --> */}
						<div className="modal-content form">
							<div className="modal-header">
								<h4>Add new event</h4>
							</div>
							<div className="modal-body">
								<input className="modal-input" ref="time" type="text" placeholder="event time" autoFocus/>
								<input className="modal-input" ref="type" type="text" placeholder="event type" />
								<input className="modal-input" ref="narrator" type="text" placeholder="event narrator" />
								<input className="modal-input" ref="name" type="text" placeholder="event name" />
								<button className="button modal-button" onClick={this.createAndClose}>Add</button>
							</div>
						</div>
					</div>

				</CalendarWrapper>
		);
	}
}
