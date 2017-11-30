import React, {Component} from 'react';

import {DayOfMonth} from './style';

export default class DayOfMonthComponent extends Component {
	render() {
		return (
			<DayOfMonth>{this.props.day}</DayOfMonth>
		);
	}
}
