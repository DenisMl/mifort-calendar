import React, {Component} from 'react';

import {Name} from './style';

export default class NameComponent extends Component {
	render() {
		return (
			<Name>{this.props.name}</Name>
		);
	}
}
