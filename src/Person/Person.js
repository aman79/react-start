import React from 'react';

const Person = (props) => {
	return (
		<p>
			I m {props.name} and {props.age} old {props.children}
		</p>
	);
};

export default Person;
