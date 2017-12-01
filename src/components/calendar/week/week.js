import React, {Component} from 'react';
import DayComponent from "../day/day";

import {Week} from './style';


export default class WeekComponent extends Component {

	constructor(props) {
		super(props);
		// this.state = {currentMonth: null};
		this.renderDays = this.renderDays.bind(this);
	}

	renderDays(day, i) {
		return (<DayComponent day={day} key={i} modalOpen={this.props.modalOpen} setChosenDay={this.props.setChosenDay}/>)
	}

	render() {
		return (
			<Week>
				{this.props.week.map(this.renderDays)}
			</Week>
		);
	}
}

