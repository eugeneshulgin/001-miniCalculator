let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');

var operationButtons = [plus, minus, multiply, divide];

for (var i = 0; i < operationButtons.length; i++ ) {
	var button = operationButtons[i];
	button.addEventListener('click', onButtonClick);
}

let input1 = document.querySelector('.number_1');
let input2 = document.querySelector('.number_2');


function makeOperation(operationCode) {
	var number1 = Number(input1.value);
	var number2 = Number(input2.value);

	if (operationCode === '+') {
		var result = number1 + number2;
	} else if (operationCode === '-') {
		var result = number1 - number2;
	} else if (operationCode === '*') {
		var result = number1 * number2;
	} else if (operationCode === '/') {
		var result = number1 / number2;
	} else {
		console.log('mistakes');
	}
	console.log(result);
}

function onButtonClick(eventObject){
	var clickedElement = eventObject.currentTarget;
	var operation = clickedElement.innerHTML;
	makeOperation(operation);
}