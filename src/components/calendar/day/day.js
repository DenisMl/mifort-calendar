import React, {Component} from 'react';
import TimeComponent from "./time/time";
import DayOfMonthComponent from "./dayOfMonth/dayOfMonth";
import EventTypeComponent from "./eventType/eventType";
import NarratorComponent from "./narrator/narrator";
import NameComponent from "./name/name";
import AddButtonComponent from "./addButton/addButton";

import {Day} from './style';


export default class DayComponent extends Component {
	render() {
    let day;
    if (this.props.day) {
      day = (
      	<div>
					<DayOfMonthComponent day={this.props.day.dayOfMonth}/>
					<TimeComponent time={this.props.day.event[0].time}/>
					<EventTypeComponent type={this.props.day.event[0].eventType}/>
					<NarratorComponent narrator={this.props.day.event[0].narrator}/>
					<NameComponent name={this.props.day.event[0].name}/>
					<AddButtonComponent />
				</div>
      )
    } else {
      day = (
        <div></div>
      )
    }
		return (
			<Day>
				{day}
			</Day>
		);
	}
}

