import React, {Component} from 'react';

import {ModalWrap, ModalContent, ModalHeader, ModalBody, Time, Type, Narrator, Name, CreateEventButton} from './style';


export default class AddEventModal extends Component {

	constructor(props) {
		super(props);
		this.addAndClose = this.addAndClose.bind(this);
		this.modalCloseOutside = this.modalCloseOutside.bind(this);

	}

	addAndClose() {
		let newEvent = {
			name: this.name.value,
			narrator: this.narrator.value,
			time: this.time.value,
			eventType: this.type.value
		};
		this.props.addEvent(newEvent);
		this.props.modalClose();
	};

	modalCloseOutside(event) {
		// event.stopPropagation();

		if (event.target === this.modal) {
			this.props.modalClose();
		}
	};

	render() {
		return (
			<ModalWrap innerRef={(comp) => { this.modal = comp }} onClick={this.modalCloseOutside}>
				<ModalContent>
					<ModalHeader>
						<span>Add new event</span>
					</ModalHeader>
					<ModalBody>
						<Time innerRef={(comp) => { this.time = comp }} />
						<Type innerRef={(comp) => { this.type = comp }} />
						<Narrator innerRef={(comp) => { this.narrator = comp }} />
						<Name innerRef={(comp) => { this.name = comp }} />
						<CreateEventButton onClick={this.addAndClose}>Add</CreateEventButton>
					</ModalBody>
				</ModalContent>
			</ModalWrap>

		);
	}
}
