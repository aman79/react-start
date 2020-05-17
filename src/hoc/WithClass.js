import React from 'react';

const WithClass = (WrappedComponent, className) => (props) => (
	<div className={className}>
		<WrappedComponent />
	</div>
);

export default WithClass;
