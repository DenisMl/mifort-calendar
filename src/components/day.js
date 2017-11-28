import React, {Component} from 'react';

export default class Day extends Component {
	render() {
    let day;
    if (this.props.day) {
      day = (
        <div>{this.props.day.dayOfMonth}</div>
      )
    } else {
      day = (
        <div>another</div>
      )
    }
		return (
			<div className="day">
				{day}
			</div>
		);
	}
}

