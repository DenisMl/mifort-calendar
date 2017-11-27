import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Header from "../components/header";
import Calendar from "../components/calendar";

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
			<div>
				<Header/>
				<main>
					<div className="calendar-wrapper">
						<Calendar/>
					</div>
				</main>
			</div>
		);
	};

}

ReactDOM.render(
	<App/>, document.getElementById('root')
);
