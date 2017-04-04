import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ScoreBox extends Component {

	render() {
		return (
			<div className="well">
				Q. {this.props.current} / {this.props.questions.length} <span className="pull-right"><strong>score: {this.props.score}</strong></span>
			</div>
		)
	}
}

export default ScoreBox;