import React, {Component} from 'react';

import {EventType} from './style';

export default class EventTypeComponent extends Component {
	render() {
		return (
			<EventType>{this.props.type}</EventType>
		);
	}
}
