import React, {Component} from 'react';

import {Time} from './style';

export default class TimeComponent extends Component {
	render() {
		return (
			<Time>{this.props.time}</Time>
		);
	}
}
