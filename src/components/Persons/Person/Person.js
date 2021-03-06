import React, { Component, Fragment } from 'react';
import './Person.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
	// const random = Math.random();
	// if (random > 0) {
	// 	throw new Error('Something went wrong');
	// }
	render() {
		console.log('[Person.js] rendering...');

		return (
			<Fragment>
				<p onClick={this.props.click}>
					I m {this.props.name} and {this.props.age} old {this.props.children}
				</p>
				<input
					type='text'
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Fragment>
		);
	}
}

export default Person;

// its good practice to create stateless component or dump componet or presentational component
//bcoz they out external data
