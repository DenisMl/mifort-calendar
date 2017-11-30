import React, {Component} from 'react';

import {Narrator} from './style';

export default class NarratorComponent extends Component {
	render() {
		return (
			<Narrator>{this.props.narrator}</Narrator>
		);
	}
}
