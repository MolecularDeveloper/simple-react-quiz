import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScoreBox from './quiz/ScoreBox.jsx';
import QuestionList from './quiz/QuestionList.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [
				{
					id: 1,
					text: 'what color is legit?',
					choices: [
						{
							id: 'a',
							text: 'maroon'
						}, 
						{
							id: 'b',
							text: 'green'
						},
						{
							id: 'c',
							text: 'grey'
						},
						{
							id: 'd',
							text: 'teal'
						}
					], 
					correct: 'c'
				},				{
					id: 2,
					text: 'what music is legit?',
					choices: [
						{
							id: 'a',
							text: 'rock'
						}, 
						{
							id: 'b',
							text: 'soft'
						},
						{
							id: 'c',
							text: 'ambient'
						},
						{
							id: 'd',
							text: 'rap'
						}
					], 
					correct: 'b'
				},				{
					id: 3,
					text: 'what planet is legit?',
					choices: [
						{
							id: 'a',
							text: 'mercury'
						}, 
						{
							id: 'b',
							text: 'Venus'
						},
						{
							id: 'c',
							text: 'Earth'
						},
						{
							id: 'd',
							text: 'Mars'
						}
					], 
					correct: 'c'
				},				{
					id: 4,
					text: 'what movie is legit?',
					choices: [
						{
							id: 'a',
							text: 'the departed'
						}, 
						{
							id: 'b',
							text: 'pineappple express'
						},
						{
							id: 'c',
							text: 'step bros'
						},
						{
							id: 'd',
							text: 'arrival'
						}
					], 
					correct: 'b'
				}
			],
			score: 0,
			current: 1
		}
	}

	setCurrent(current) {
		this.setState({
			current
		})
	}

	setScore(score) {
		this.setState({
			score
		})
	}

	render() {
		if(this.state.current > this.state.questions.length) {
			var scorebox = '';
			var results = <Results {...this.state} />
		} else {
			var scorebox = <ScoreBox {...this.state} />
			var results = '';
		}
		return (
			<div>
				{scorebox}
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
				{results}
			</div>
		)
	}
}

export default App;