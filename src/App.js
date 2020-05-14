import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	//State is managed inside the component
	//props is managed outside of the component

	state = {
		persons: [
			{ name: 'Max', age: 20 },
			{ name: 'Manu', age: 34 },
			{ name: 'SSS', age: 23 },
		],
	};

	switchNameHandler = () => {
		// console.log('thss', this);
		this.setState({
			persons: [
				{ name: 'fffff', age: 20 },
				{ name: 'Manu', age: 34 },
				{ name: 'SSS', age: 23 },
			],
		});
	};

	render() {
		console.log(this);

		return (
			<div className='App'>
				<h1>HI</h1>
				<button onClick={this.switchNameHandler}>Switch Name</button>
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

// const [personState, setPersonsState] = useState({
// 	persons: [
// 		{ name: 'Max', age: 20 },
// 		{ name: 'Manu', age: 34 },
// 		{ name: 'SSS', age: 23 },
// 	],
// 	otherState: 'some other value',
// });

// const switchNameHandler = () => {
// 	setPersonsState({
// 		persons: [
// 			{ name: 'Max', age: 24 },
// 			{ name: 'Manu', age: 64 },
// 			{ name: 'SSS', age: 23 },
// 		],
// 		otherState: 'some other value',
// 	});
// };
