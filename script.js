let answer = "hello";
let form = document.querySelector('form');

let input = document.querySelector('input');
let name = document.querySelector('#result');
let win = document.querySelector('#win');
let attempt = document.querySelector('#attempt');

let exit = false;
let tries = 0;

function checkAnswer(event) {
	event.preventDefault();
	if (!exit) {
		if (input.value.length == 5) {
			tries++;
			name.innerHTML = `${input.value}`;
			if (input.value == answer) {
				win.innerHTML = "You won!";
				exit = true;
			} else {
				win.innerHTML = "Not quite right!";
			}
			if (tries == 1) {
				attempt.innerHTML = tries + " attempt taken";
			} else {
				attempt.innerHTML = tries + " attempts taken";
			}

		} else {
			name.innerHTML = "";
		}
	}
}
