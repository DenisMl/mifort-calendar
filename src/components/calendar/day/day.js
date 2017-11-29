import React, {Component} from 'react';

import {Day} from './style';


export default class DayComponent extends Component {
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
			<Day>
				{day}
			</Day>
		);
	}
}

