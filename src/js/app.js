import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Header from "../components/header/header";
import Main from "../components/main/main";
import {Wrapper} from "../components/wrapper/style";

class App extends Component {

	// getUserInfo: function () {
	// 	let self = this;
	// 	fetch('/app/getUserInfo', {
	// 		method: 'get',
	// 		dataType: 'json',
	// 	}).then(function (res) {
	// 		return res.json();
	// 	}).then(function (res) {
	// 		self.setState({user: res});
	// 	}).then(function (res) {
	// 		self.getProjectsInfo();
	// 	}).catch(function (err) {
	// 		console.log(`>>err: ${err}`);
	// 	});
	// },

	render() {
		return (
			<Wrapper>
				<Header/>
				<Main/>
			</Wrapper>
		);
	};

}

ReactDOM.render(
	<App/>, document.getElementById('root')
);
