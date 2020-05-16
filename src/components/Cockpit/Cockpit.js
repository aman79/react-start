import React, { useEffect, useState } from 'react';

import './Cockpit.css';

const Cockpit = (props) => {
	useEffect(() => {
		// componeneDidmount +  componentDidupadte in one hook
		console.log('[Cockpit.js] useEffect ');

		setTimeout(() => {
			alert('alert');
		}, 1000);
		return () => {
			console.log('cleanup of useeffect');
		};
	}, []);

	useEffect(() => {
		console.log('[Cockpit.js] 2 useEffect ');

		return () => {
			console.log('cleanup of2 useeffect');
		};
	});

	const style = {
		backgroundColor: 'green',
		color: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '0.8rem',
		cursor: 'pointer',
	};
	let classes = [];

	if (props.persons.length <= 2) {
		classes.push('red');
	}

	if (props.persons.length <= 1) {
		classes.push('bold');
	}

	return (
		<div>
			<h1>HI</h1>
			<p className={classes.join(' ')}>This is really working</p>
			<button style={style} onClick={props.clicked}>
				Toggle Person
			</button>
		</div>
	);
};

export default Cockpit;
