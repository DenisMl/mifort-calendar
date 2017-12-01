import React, {Component} from 'react';
import {WeekdayNames} from "./style";
import {WeekdayName} from "./style";

export default class WeekdayNamesComponent extends Component {
	render() {
		return (
			<WeekdayNames>
				<WeekdayName>MON</WeekdayName>
				<WeekdayName>TUE</WeekdayName>
				<WeekdayName>WED</WeekdayName>
				<WeekdayName>THU</WeekdayName>
				<WeekdayName>FRI</WeekdayName>
				<WeekdayName>SAT</WeekdayName>
				<WeekdayName>SUN</WeekdayName>
			</WeekdayNames>
		);
	}
}
