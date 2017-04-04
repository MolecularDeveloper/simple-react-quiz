import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Results extends Component {

	render() {
		var percent = (this.props.score / this.props.questions.length * 100);
		if(percent > 80) {
			var message = "great job, you passed";
		} else if(percent < 80 && percent > 60) {
			var message = "you did ok";
		} else {
			var message = "you should try again";
		}
		return (
			<div className="well">
				<h4> {this.props.score} / {this.props.questions.length} correct </h4>
				<h1> {percent}% - {message} </h1>
					<hr />
					<a href="/app">retry</a>
			</div>
		)
	}
}

export default Results;