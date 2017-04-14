//import dependencies
import React from 'react';
import Header from './header';

//create App component
export default (props) => {
	return(
		<div>
			<Header />
			{props.children}
		</div>
		);
};