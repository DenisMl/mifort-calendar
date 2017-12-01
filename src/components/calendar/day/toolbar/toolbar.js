import React, {Component} from 'react';

import {Toolbar} from './style';
import AddButtonComponent from "./addButton/addButton";

export default class ToolbarComponent extends Component {
	render() {
		return (
			<Toolbar>
				<AddButtonComponent dayOfMonth={this.props.dayOfMonth} modalOpen={this.props.modalOpen}
														setChosenDay={this.props.setChosenDay}/>
			</Toolbar>
		);
	}
}
