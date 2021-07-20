/* jshint esversion: 6 */

let current = 0;
let previous = 0;
let operation = "plus";
let prevOp = "plus";

function reset(){
	current = 0; previous = 0;
	operation = "plus";
}

function clear(){
	//reset defaults
	display.textContent = "";
}

function operate(prev, cur, operation){
	switch(operation){
		case "plus":
			current = +prev + +cur;
			return current;
		case "minus":
			current = +prev - +cur;
			return current;
		case "times":
			current = +prev * +cur;
			return current;
		case "divide":
			//divide by zero error
			if(current == 0) return "ERROR!"; 
			current = +prev / +cur;
			return current;
		default:
			console.log("ERROR: You shouldn't be seeing this!");
	}
}

const container = document.querySelector(".calculator");
const display = document.querySelector("#display");

const number = document.querySelectorAll(".number");

number.forEach((number) => {
	number.addEventListener('click', function(e){
		// display.textContent = `${e.target}`;
		
		if(current == 0) clear();
		console.log(e);
		console.log('TEST');
		display.textContent += e.target.innerText;
		current += e.target.innerText;
		//current = e.target.innerText;
	});
});

const op = document.querySelectorAll(".operation");

op.forEach((op) => {
	op.addEventListener('click', function(e){
		console.log(e);

		//implicitly evaluate on keypress
		if(previous != 0 && current != 0){
			previous = operate(previous, current, operation);
		}
		else{
			previous = current;
		}
		//previous = current;
	
		operation = e.target.id;
		current = 0;
		clear();
	});
});

const equals = document.querySelector("#equals");
equals.addEventListener('click', () => {
	display.textContent = operate(previous, current, operation);
	
});

const clr = document.querySelector("#clr");
clr.addEventListener('click', () => {
	clear();
	reset();
});
