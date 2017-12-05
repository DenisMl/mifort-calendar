import React, {Component} from 'react';

import {AddButton} from './style';

export default class AddButtonComponent extends Component {

	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.props.setChosenDay(this.props.dayOfMonth);
		this.props.modalOpen();

	}

	render() {
		return (
			<AddButton onClick={this.openModal}>+</AddButton>
		);
	}
}
