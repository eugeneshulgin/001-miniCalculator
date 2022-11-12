// mini calc

// let plus = document.querySelector('.plus');
// let minus = document.querySelector('.minus');
// let multiply = document.querySelector('.multiply');
// let divide = document.querySelector('.divide');

// var operationButtons = [plus, minus, multiply, divide];

// for (var i = 0; i < operationButtons.length; i++ ) {
// 	var button = operationButtons[i];
// 	button.addEventListener('click', onButtonClick);
// }

// let input1 = document.querySelector('.number_1');
// let input2 = document.querySelector('.number_2');


// function makeOperation(operationCode) {
// 	var number1 = Number(input1.value);
// 	var number2 = Number(input2.value);

// 	if (operationCode === '+') {
// 		var result = number1 + number2;
// 	} else if (operationCode === '-') {
// 		var result = number1 - number2;
// 	} else if (operationCode === '*') {
// 		var result = number1 * number2;
// 	} else if (operationCode === '/') {
// 		var result = number1 / number2;
// 	} else {
// 		console.log('mistakes');
// 	}
// 	console.log(result);
// }

// function onButtonClick(eventObject){
// 	var clickedElement = eventObject.currentTarget;
// 	var operation = clickedElement.innerHTML;
// 	makeOperation(operation);
// }

let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','=','x'];

const out = document.querySelector('.calc-screen p');
