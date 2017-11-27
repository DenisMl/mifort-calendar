import React, {Component} from 'react';

export default class Day extends Component {
	render() {
		return (
			<div className="day">
				{this.props.day.dayOfMonth}
			</div>
		);
	}
}

