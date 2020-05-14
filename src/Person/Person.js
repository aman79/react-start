import React from 'react';

const Person = (props) => {
	return (
		<p>
			I m {props.name} and {props.age} old {props.children}
		</p>
	);
};

export default Person;

// its good practice to create stateless component or dump componet or presentational component
//bcoz they out external data
