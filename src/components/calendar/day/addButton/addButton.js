import React, {Component} from 'react';

import {AddButton} from './style';

export default class AddButtonComponent extends Component {

	constructor(props) {
		super(props);
		this.addEvent = this.addEvent.bind(this);
	}

	addEvent() {
		this.props.setChosenDay(this.props.dayOfMonth);
		this.props.modalOpen();

	}

	render() {
		return (
			<AddButton onClick={this.addEvent}>+</AddButton>
		);
	}
}
