let maxtries = 6;

let input = document.querySelector('input');
let win = document.querySelector('#win');
let hint = document.querySelector('#hint');
let attempt = document.querySelector('#attempt');

let exit = false;
let tries = 0;

let answer = "hello";
let len = answer.length;

input.setAttribute("maxlength", len);
hint.innerHTML = "Word is of length: " + len + "</br>";

function letterinstr(c) {
	
	let isin = false;

	for (var i = 0; i < len; i++) {
		if (c == answer.charAt(i)) {
			isin = true;	
			break;
		}
	}	

	return isin;

}

function addGuessDisplay(answer, guess) {
	
	let cat = ""
	for (var i = 0; i < len; i++) {
		if (guess.charAt(i) != answer.charAt(i) && !(letterinstr(guess.charAt(i))) ) {
			cat += '<span style="color: #595959">' + guess.charAt(i) + "</span>";
		} else if (guess.charAt(i) != answer.charAt(i) && (letterinstr(guess.charAt(i))) ) {
			cat += '<span style="color: #bebe00">' + guess.charAt(i) + "</span>";
		} else if (guess.charAt(i) == answer.charAt(i)) {
			cat += '<span style="color: #00ff00">' + guess.charAt(i) + "</span>";
		}
	}
	hint.innerHTML += cat + "</br>";
	
}

function validateInput(str) {
	
	let isvalid = true;
	
	for (var i = 0; i < len; i++) {
		let c = str.charAt(i)
		if (c.toUpperCase() == c.toLowerCase()) {
			isvalid = false;
			break;
		}
	}

	return isvalid;

}

function checkAnswer(event) {
	
	event.preventDefault();

	if (!exit) {
		if (validateInput(input.value)) {
			addGuessDisplay(answer, input.value);
			tries++;
			if (input.value == answer) {
				win.innerHTML = "You won!";
				exit = true;
			} else {
				win.innerHTML = "Not quite right!";
			}
			if (tries >= maxtries && !exit) {
				win.innerHTML = "You lost! Better luck next time!";
				exit = true;
			}
			attempt.innerHTML = tries + " attempt";
			if (tries > 1) {
				attempt.innerHTML += "s";
			}
		}
	}
}
