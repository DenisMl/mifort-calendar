import React, {Component} from 'react';

import {Content} from './style';
import EventTypeComponent from "./eventType/eventType";
import NarratorComponent from "./narrator/narrator";
import NameComponent from "./name/name";

export default class ContentComponent extends Component {
	render() {
		return (
			<Content>
				<EventTypeComponent type={this.props.type}/>
				<NarratorComponent narrator={this.props.narrator}/>
				<NameComponent name={this.props.name}/>
			</Content>
		);
	}
}
