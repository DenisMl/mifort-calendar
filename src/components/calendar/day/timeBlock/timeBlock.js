import React, {Component} from 'react';

import {TimeBlock} from './style';
import DayOfMonthComponent from "./dayOfMonth/dayOfMonth";
import TimeComponent from "./time/time";

export default class TimeBlockComponent extends Component {
	render() {
		return (
			<TimeBlock>
				<DayOfMonthComponent day={this.props.day}/>
				<TimeComponent time={this.props.time}/>
			</TimeBlock>
		);
	}
}
