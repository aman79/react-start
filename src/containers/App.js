import React, { Component } from 'react';
import './App.css';
//import ErrrorBoundary from '../ErrorBoundary/ErrrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	//State is managed inside the component
	//props is managed outside of the component

	constructor(props) {
		super(props);
		console.log('props', props);
		console.log('App.js [Constructor]');
	}
	state = {
		persons: [
			{ id: 'jjhdj', name: 'Max', age: 20 },
			{ id: 'jjhdjd', name: 'Manu', age: 34 },
			{ id: 'jjhdddj', name: 'SSS', age: 23 },
		],
		otherState: 'some other value',
		showPersons: false,
		showCockpit: true,
	};

	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps [App.js]', props);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentdidmount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('[App.js] componentDidUpdate');
	}

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
		console.log('[App.js] render');
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangeHandler}
				/>
			);
		}

		//let classes = ['red', 'bold'].join(' ');

		return (
			<div className='App'>
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}
				>
					Remove Cockpit
				</button>
				{this.state.showCockpit ? (
					<Cockpit
						persons={this.state.persons}
						clicked={this.togglePersonHandler}
					/>
				) : null}
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
