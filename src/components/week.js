import React, {Component} from 'react';
import Day from "./day";

export default class Week extends Component {

	constructor(props) {
		super(props);
		// this.state = {currentMonth: null};
		this.renderDays = this.renderDays.bind(this);
	}

	renderDays(day, i) {
		return (<Day day={day} key={i}/>)
	}

	render() {
		return (
			<div className="week">
				{this.props.week.map(this.renderDays)}
			</div>
		);
	}
}

