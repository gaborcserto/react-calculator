import React from 'react';

const calculatorKey = props => {

	return (
		<button
			className={props.btnStyle}
			onClick={() => props.onPress(props.children)} >
			{props.children}
		</button>
	);
}

export default calculatorKey;