import React, { Component, PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('getDerivedStateFromProps [Persons.js]', props);
	// 	return state;
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[Persons.js] ShouldComponentUpdate');
	// 	if (
	// 		this.props.persons !== nextProps.persons ||
	// 		this.props.clicked !== nextProps.clicked ||
	// 		this.props.changed !== nextProps.changed
	// 	) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('[Persons.js] componentDidUpdate');
	}

	render() {
		console.log('[Persons.js] rendering..');

		return this.props.persons.map((persons, index) => (
			<Person
				key={persons.id}
				click={() => this.props.clicked(index)}
				name={persons.name}
				age={persons.age}
				changed={(event) => this.props.changed(event, persons.id)}
			/>
		));
	}
}

export default Persons;
