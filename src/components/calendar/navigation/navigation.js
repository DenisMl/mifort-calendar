import React, {Component} from 'react';
import DayComponent from "../day/day";

import { NavigationWrap, LastMonth, NextMonth } from './style';


export default class Navigation extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		let displayedMonth = this.props.currentMonth;

		return (
			<NavigationWrap>
				<LastMonth>Last month</LastMonth>
					{displayedMonth}
				<NextMonth>Next month</NextMonth>
			</NavigationWrap>
		);
	}
}

