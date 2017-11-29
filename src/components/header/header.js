import React, {Component} from 'react';
import {HeaderElement} from './style.js';


class Header extends Component {
	render() {
		return (
			<HeaderElement>
				<div className="logo">
					<img src="/public/img/logo.png" alt="logo"/>
					<span>Mifort</span>
				</div>
			</HeaderElement>
		);
	}
}

export default Header;
