let displayResult = document.querySelector("#display-result");
let resultInput = document.querySelector("#input");
let countElement = document.querySelector("#count");
let input;


let firstNumber;
let secondNumber;
let result;


let correct = 0;
let wrong = 0;


const operators = ["+", "-", "*", "/"]
let operator;


function getRandomNumber()
{
	return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}


function getRandomOperator()
{
	return operators[Math.floor(Math.random() * (operators.length - 1 + 0)) + 0];
}


function start()
{
	firstNumber = getRandomNumber();
	secondNumber = getRandomNumber();
	operator = getRandomOperator();


	switch(operator)
	{
		case "+":


			result = firstNumber + secondNumber;
			render()


		break;


		case "-":


			result = firstNumber - secondNumber;
			render()


		break;


		case "*":


			result = firstNumber * secondNumber;
			render()

		break;


		case "/":


			result = firstNumber / secondNumber;
			render()


		break;

	}

	resultInput.focus();
	resultInput.scrollIntoView();
	render();
}


function render()
{
	resultInput.value = "";
	displayResult.textContent = `${firstNumber} ${operator} ${secondNumber}`;
	count.textContent = `✔️ ${correct} | ❌ ${wrong}`
} 


function check()
{
	input = parseInt(resultInput.value);


	if (isNaN(input))
	{
		alert("Insert a VALID value!");
		resultInput.value = "";
	}
	else if (input === result)
	{
		alert("Correct!");
		correct += 1;
		start();
	}
	else if (input !== result)
	{
		alert("Wrong!");
		wrong += 1;
		start();
	}
}


start();