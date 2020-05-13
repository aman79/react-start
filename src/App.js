import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	//State is managed inside the component

	state = {
		persons: [
			{ name: 'Max', age: 20 },
			{ name: 'Manu', age: 34 },
			{ name: 'SSS', age: 23 },
		],
	};

	render() {
		console.log(this);

		return (
			<div className='App'>
				<h1>HI</h1>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
				>
					LL
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		);
		// return React.createElement(
		// 	'div',
		// 	{ className: 'App' },
		// 	React.createElement('h1', null, 'Does this work now?')
		// );
	}
}

export default App;
