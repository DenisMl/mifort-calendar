import React, {Component} from 'react';
import TimeComponent from "./time/time";
import DayOfMonthComponent from "./dayOfMonth/dayOfMonth";

import {Day} from './style';


export default class DayComponent extends Component {
	render() {
    let day;
    if (this.props.day) {
      day = (
      	<div>
					<DayOfMonthComponent day={this.props.day.dayOfMonth}/>
					<TimeComponent time={this.props.day.event[0].time}/>
				</div>
      )
    } else {
      day = (
        <div>another</div>
      )
    }
		return (
			<Day className="day">
				{day}
			</Day>
		);
	}
}

