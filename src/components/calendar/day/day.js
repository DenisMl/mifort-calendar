import React, {Component} from 'react';
import NoEventsComponent from "./noEvents/noEvents";
import ToolbarComponent from "./toolbar/toolbar";
import {Day} from './style';
import ContentComponent from "./content/content";
import TimeBlockComponent from "./timeBlock/timeBlock";

export default class DayComponent extends Component {
	constructor(props) {
		super(props);
		this.renderDay = this.renderDay.bind(this);
	}

	renderDay() {
		let time = this.props.day.event[0].time;
		let eventType = this.props.day.event[0].eventType;
		let narrator = this.props.day.event[0].narrator;
		let name = this.props.day.event[0].name;
		let content = <NoEventsComponent/>;
		if (time || eventType || narrator || name) {
			content =
				<ContentComponent type={this.props.day.event[0].eventType} narrator={this.props.day.event[0].narrator}
													name={this.props.day.event[0].name}/>;
		}
		return (
			<div>
				<TimeBlockComponent
					day={this.props.day.dayOfMonth}
					time={this.props.day.event[0].time}
				/>
				{content}
				<ToolbarComponent
					dayOfMonth={this.props.day.dayOfMonth}
					modalIsDisplayed={this.props.modalIsDisplayed}
					setChosenDay={this.props.setChosenDay}
				/>
			</div>
		)
	}

	render() {
		let day = null;
		let weekend = '';
		if (this.props.day) {
			day = this.renderDay();
		}
		if (this.props.dayOfWeek >= 6) {
			weekend = 'weekend'
		}
		return (
			<Day className={weekend || ''}>
				{day}
			</Day>
		)
	}
}
