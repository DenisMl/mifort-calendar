import React, {Component} from 'react';
import NoEventsComponent from "./noEvents/noEvents";
import ToolbarComponent from "./toolbar/toolbar";
import {Day} from './style';
import ContentComponent from "./content/content";
import TimeBlockComponent from "./timeBlock/timeBlock";
import AddEventModal from "../addEventModal/addEventModal";

export default class DayComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {modalIsOpened: false};
		this.renderDay = this.renderDay.bind(this);
		this.modalOpen = this.modalOpen.bind(this);
		this.modalClose = this.modalClose.bind(this);
	}

	modalOpen() {
		console.log(`modal Open`);
		this.setState({modalIsOpened: true});
	};

	modalClose() {
		console.log(`modal Close`);
		this.setState({modalIsOpened: false});
	};




	renderDay() {
		let time = this.props.day.event[0].time;
		let eventType = this.props.day.event[0].eventType;
		let narrator = this.props.day.event[0].narrator;
		let name = this.props.day.event[0].name;
		let content = <NoEventsComponent />;
		let modal;
		if (this.state.modalIsOpened) {
			modal = <AddEventModal addEvent={this.props.addEvent}
														 modalClose={this.modalClose}/>
		}
		if (time || eventType || narrator || name) {
			content = <ContentComponent type={this.props.day.event[0].eventType}
																	narrator={this.props.day.event[0].narrator}
																	name={this.props.day.event[0].name}/>;
		}

		return (
			<div>
				<TimeBlockComponent day={this.props.day.dayOfMonth}
														time={this.props.day.event[0].time} />
				{content}
				<ToolbarComponent dayOfMonth={this.props.day.dayOfMonth}
													modalOpen={this.modalOpen}
													modalClose={this.modalClose}
													setChosenDay={this.props.setChosenDay} />
				{modal}
			</div>
		)
	}

	render() {
		let day = null;
		if (this.props.day) {
			day = this.renderDay();
		}
		if (this.props.dayOfWeek >= 6) {
		}
		return (
			<Day>
				{day}
			</Day>
		)
	}
}
