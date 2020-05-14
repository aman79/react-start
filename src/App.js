import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	//State is managed inside the component
	//props is managed outside of the component

	state = {
		persons: [
			{ id: 'jjhdj', name: 'Max', age: 20 },
			{ id: 'jjhdjd', name: 'Manu', age: 34 },
			{ id: 'jjhdddj', name: 'SSS', age: 23 },
		],
		otherState: 'some other value',
		showPersons: false,
	};

	switchNameHandler = (name) => {
		// console.log('thss', this);
		this.setState({
			persons: [
				{ name: name, age: 20 },
				{ name: 'Manu', age: 34 },
				{ name: 'SSS', age: 23 },
			],
		});
	};

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(
			(person) => person.id === id
		);

		const person = { ...this.state.persons[personIndex] };
		// const person = Object.assign({}, this.state.persons);

		person.name = event.target.value;

		const persons = [...this.state.persons];

		persons[personIndex] = person;

		this.setState({ persons });
	};

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	deletePersonHandler = (personIndex) => {
		//	const persons = this.state.persons.splice();

		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons });
	};

	render() {
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((persons, index) => {
						return (
							<Person
								key={persons.id}
								click={() => this.deletePersonHandler(index)}
								name={persons.name}
								age={persons.age}
								changed={(event) => this.nameChangeHandler(event, persons.id)}
							/>
						);
					})}
				</div>
			);
		}

		return (
			<div className='App'>
				<h1>HI</h1>
				<button onClick={this.togglePersonHandler}>Toggle Person</button>
				{persons}
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
