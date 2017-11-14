import React, {Component} from 'react';

class Calendar extends Component {

	// modalOpen(event) {
	// 	event.stopPropagation();
	// 	this.refs.modal.style.display = "block";
	// 	this.refs.taskName.value = '';
	// 	this.refs.taskName.focus();
	// };

	// modalClose() {
	// 	this.refs.modal.style.display = "none";
	// };

	// modalCloseOutside(event) {
	// 	event.stopPropagation();
	// 	if (event.target == this.refs.modal) {
	// 		this.refs.modal.style.display = "none";
	// 	}
	// };

	// createAndClose(event) {
	// 	this.createTask();
	// 	this.modalClose();
	// };


	// getInitialState() {
	// 	return {tasksShown: false, devsList: [], projectDevelopers: []};
	// };


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

	componentDidMount() {
		this.getCurrentMonth()
	};

	render() {
		return (
			<div>
				calendar here
			</div>
		);
	};
}

export default Calendar;
