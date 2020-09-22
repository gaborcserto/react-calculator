import React, { useState }  from 'react';
import CalculatorKey from './components/CalculatorKey';
import CalculatorDisplay from './components/CalculatorDisplay';
import './App.scss';

function App () {
	const [operation, setOperation] = useState({
		firstNumber: '0',
		secondNumber: '',
		window: '',
		operator: '+',
		result: 0
	});

	const handleNumber = (number) => {
		let firstNumber = parseToNumberValid(operation.firstNumber);
		let operator = operation.operator;
		let result = parseToNumberValid(operation.result);
		let secondNumber = operation.secondNumber + number;

		if (operator === "+") {
			result = Math.round((parseFloat(`${firstNumber}`) + parseFloat(secondNumber)) * 100) / 100;
		} else if (operator === "-") {
			result = Math.round((parseFloat(`${firstNumber}`) - parseFloat(secondNumber)) * 1000) / 1000;
		} else if (operator === "/") {
			result = Math.round((parseFloat(`${firstNumber}`) / parseFloat(secondNumber)) * 1000) / 1000;
		} else if (operator === "*") {
			result = Math.round((parseFloat(`${firstNumber}`) * parseFloat(secondNumber)) * 1000) / 1000;
		}


		if (operator === ".") {
			decimate(number, result, secondNumber)
		} else {
			setOperation({
				...operation,
				window: operation.window + number,
				result: result,
				secondNumber: secondNumber,
			});
		}
	};

	const parseToNumberValid = (string) => {
		let number = parseFloat(string);
		if (isNaN(number)) {
			return 0;
		}else{
			return number;
		}
	}

	const handleOperators = (operator) => {
		setOperation({
			...operation,
			window: operation.window + operator,
			operator: operator,
			firstNumber: operation.result,
			secondNumber: "",
		});
	};

	const handleResult = () => {
		setOperation({
			...operation,
			firstNumber: "",
			secondNumber: "",
			window: operation.result,
		});
	};

	const handleClear = () => {
		setOperation({
			...operation,
			firstNumber: "0",
			secondNumber: "",
			window: "",
			operator: "+",
			result: 0,
		});
	};

	const handleDelete = () => {
		if(operation.secondNumber.length > 1) {
			const deletedNumber = operation.secondNumber.slice(0, operation.secondNumber.length - 1);

			setOperation({
				...operation,
				secondNumber: deletedNumber,
				window: deletedNumber,
				result:  parseFloat(deletedNumber)
			});
		}
	}

	const handleDecimal = () => {
		if (operation.secondNumber === '') {
			setOperation({
				...operation,
				secondNumber: '0.',
				window: '0.',
				result:  parseFloat('0.')
			});
		} else if (operation.secondNumber !== operation.result && !operation.secondNumber.includes('.')) {
			setOperation({
				...operation,
				secondNumber: `${operation.result}.`,
				window: `${operation.result}.`,
				operator: '.',
				result:  parseFloat(`${operation.result}.`)
			});
		} else if(!operation.secondNumber.includes('.')) {
			setOperation({
				...operation,
				secondNumber: `${operation.secondNumber}.`,
				window: `${operation.secondNumber}.`,
				result:  parseFloat(`${operation.secondNumber}.`)
			});
		}
	}

	const toggleSign = () => {
		let number = operation.secondNumber;
		if (operation.secondNumber !== operation.result) number = `${operation.result}`;

		if (parseFloat(operation.secondNumber) > 0) {
			setOperation({
				...operation,
				secondNumber: `-${number}`,
				window: `-${number}`,
				result:  parseFloat(number) * -1
			});
		} else if (parseFloat(number) < 0) {
			const positiveNumber = number.slice(1);

			setOperation({
				...operation,
				secondNumber: positiveNumber,
				window: positiveNumber,
				result:  parseFloat(number) * -1
			});
		}
	}

	const decimate = (number, result, secondNumber) => {
			let newResult = `${result}.${number}`;
			if(operation.result.toString().includes('.')) {
				newResult = `${result}${number}`;
				console.log('kl');
			}

			setOperation({
				...operation,
				window: operation.window + number,
				result: newResult,
				secondNumber: secondNumber,
			});
	}

	//console.log(operation);

	return (
		<div className="App">
			<div className="calculator">
				<CalculatorDisplay operations={operation.window} results={operation.result}/>
				<div className="calculator__keypad">
					<div className="input-keys">
						<div className="function-keys">
							<CalculatorKey btnStyle="calculator__btn btn-clear" onPress={() => handleClear()}>AC</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-sign" onPress={() => toggleSign()}>±</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-del" onPress={() => handleDelete()}>⌫</CalculatorKey>
						</div>
						<div className="digit-keys">
							<CalculatorKey btnStyle="calculator__btn btn-7" onPress={() => handleNumber(7)}>7</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-8" onPress={() => handleNumber(8)}>8</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-9" onPress={() => handleNumber(9)}>9</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-4" onPress={() => handleNumber(4)}>4</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-5" onPress={() => handleNumber(5)}>5</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-6" onPress={() => handleNumber(6)}>6</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-1" onPress={() => handleNumber(1)}>1</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-2" onPress={() => handleNumber(2)}>2</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-3" onPress={() => handleNumber(3)}>3</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-0" onPress={() => handleNumber(0)}>0</CalculatorKey>
							<CalculatorKey btnStyle="calculator__btn btn-dot" onPress={() => handleDecimal()}>●</CalculatorKey>
						</div>
					</div>
					<div className="operator-keys">
						<CalculatorKey btnStyle="calculator__btn btn-divide" onPress={() => handleOperators('/')}>÷</CalculatorKey>
						<CalculatorKey btnStyle="calculator__btn btn-multiply" onPress={() => handleOperators('*')}>×</CalculatorKey>
						<CalculatorKey btnStyle="calculator__btn btn-subtract" onPress={() => handleOperators('-')}>−</CalculatorKey>
						<CalculatorKey btnStyle="calculator__btn btn-add" onPress={() => handleOperators('+')}>+</CalculatorKey>
						<CalculatorKey btnStyle="calculator__btn btn-equals" onPress={() => handleResult()}>=</CalculatorKey>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
