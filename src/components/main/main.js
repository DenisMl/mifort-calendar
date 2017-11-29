import React, {Component} from 'react';
import CalendarComponent from "../calendar/calendar";

import {Main} from './style';

export default class MainComponent extends Component {
	render() {
		return (
			<Main>
				<CalendarComponent/>
			</Main>
		);
	}
}

