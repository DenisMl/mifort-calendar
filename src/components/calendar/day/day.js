import React, {Component} from 'react';

import { Day, DayWrap } from './style';


export default class DayComponent extends Component {

	render() {
    let day = <Day />;
    if (this.props.day) {
      day = (
        <Day>{this.props.day.dayOfMonth}</Day>
      )
    }
		return (
			<DayWrap>
				{day}
			</DayWrap>
		);
	}
}

