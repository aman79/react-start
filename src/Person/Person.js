import React from 'react';
import './Person.css';

const Person = (props) => {
	// const random = Math.random();
	// if (random > 0) {
	// 	throw new Error('Something went wrong');
	// }
	return (
		<div className='Person'>
			<p onClick={props.click}>
				I m {props.name} and {props.age} old {props.children}
			</p>
			<input type='text' onChange={props.changed} value={props.name} />
		</div>
	);
};

export default Person;

// its good practice to create stateless component or dump componet or presentational component
//bcoz they out external data
