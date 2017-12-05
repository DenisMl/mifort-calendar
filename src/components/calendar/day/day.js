import React, {Component} from 'react';
import NoEventsComponent from "./noEvents/noEvents";
import ToolbarComponent from "./toolbar/toolbar";

import {Day, DayWeekend} from './style';
import ContentComponent from "./content/content";
import TimeBlockComponent from "./timeBlock/timeBlock";


export default class DayComponent extends Component {

    constructor(props) {
        super(props);
        this.renderDay = this.renderDay.bind(this);
    }

	renderDay() {
		if (this.props.day.event[0].time ||
			this.props.day.event[0].eventType ||
			this.props.day.event[0].narrator ||
			this.props.day.event[0].name) {

			return (
				<Day>
					<TimeBlockComponent day={this.props.day.dayOfMonth} time={this.props.day.event[0].time}/>
					<ContentComponent type={this.props.day.event[0].eventType} narrator={this.props.day.event[0].narrator}
														name={this.props.day.event[0].name}/>
					<ToolbarComponent dayOfMonth={this.props.day.dayOfMonth} modalOpen={this.props.modalOpen}
														setChosenDay={this.props.setChosenDay}/>
				</Day>
			)
		} else {
			return (
				<Day>
					<TimeBlockComponent day={this.props.day.dayOfMonth} time={this.props.day.event[0].time}/>
					<NoEventsComponent/>
					<ToolbarComponent dayOfMonth={this.props.day.dayOfMonth} modalOpen={this.props.modalOpen}
														setChosenDay={this.props.setChosenDay}/>
				</Day>
			)
		}
	}

	renderWeekendDay() {
		if (this.props.day.event[0].time ||
			this.props.day.event[0].eventType ||
			this.props.day.event[0].narrator ||
			this.props.day.event[0].name) {

			return (
				<DayWeekend>
					<TimeBlockComponent day={this.props.day.dayOfMonth} time={this.props.day.event[0].time}/>
					<ContentComponent type={this.props.day.event[0].eventType} narrator={this.props.day.event[0].narrator}
														name={this.props.day.event[0].name}/>
					<ToolbarComponent dayOfMonth={this.props.day.dayOfMonth} modalOpen={this.props.modalOpen}
														setChosenDay={this.props.setChosenDay}/>
				</DayWeekend>
			)
		} else {
			return (
				<DayWeekend>
					<TimeBlockComponent day={this.props.day.dayOfMonth} time={this.props.day.event[0].time}/>
					<NoEventsComponent/>
					<ToolbarComponent dayOfMonth={this.props.day.dayOfMonth} modalOpen={this.props.modalOpen}
														setChosenDay={this.props.setChosenDay}/>
				</DayWeekend>
			)
		}
	}

	render() {
		let day;
		if (this.props.day) {
			if (this.props.day.dayOfWeek === 6 || this.props.day.dayOfWeek === 7) {
				day = this.renderWeekendDay();
			} else {
				day = this.renderDay();
			}
		} else {
			day = (
				<Day/>
			)
		}
		return day;
	}
}