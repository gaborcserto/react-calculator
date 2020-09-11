import React from 'react';

const calculatorDisplay = ({operations, results}) => {

	return (
		<div className="calculator__display">
			<div className="calculator__display__history">
				{operations}
			</div>
			<div className="calculator__display__result">
				{results}
			</div>
		</div>
	);
}

export default calculatorDisplay;