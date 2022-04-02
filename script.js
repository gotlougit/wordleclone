let answer = "hello";
let len = answer.length;

let input = document.querySelector('input');
let win = document.querySelector('#win');
let hint = document.querySelector('#hint');
let attempt = document.querySelector('#attempt');

let exit = false;
let tries = 0;

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

function addGuessDisplay() {
	
	let cat = ""
	for (var i = 0; i < len; i++) {
		if (input.value.charAt(i) != answer.charAt(i) && !(letterinstr(input.value.charAt(i))) ) {
			cat += '<span style="color: #595959">' + input.value.charAt(i) + "</span>";
		} else if (input.value.charAt(i) != answer.charAt(i) && (letterinstr(input.value.charAt(i))) ) {
			cat += '<span style="color: #bebe00">' + input.value.charAt(i) + "</span>";
		} else if (input.value.charAt(i) == answer.charAt(i)) {
			cat += '<span style="color: #00ff00">' + input.value.charAt(i) + "</span>";
		}
	}
	hint.innerHTML += cat + "</br>";
	
}

function validateInput() {
	
	let isvalid = true;

	if (input.value.length != len) {
		return false;
	}

	for (var i = 0; i < len; i++) {
		let c = input.value.charAt(i)
		if (c.toUpperCase() == c.toLowerCase()) {
			console.log("hi");
			isvalid = false;
			break;
		}
	}

	return isvalid;

}

function checkAnswer(event) {
	
	event.preventDefault();

	if (!exit) {
		if (validateInput()) {
			addGuessDisplay();
			tries++;
			if (input.value == answer) {
				win.innerHTML = "You won!";
				exit = true;
			} else {
				win.innerHTML = "Not quite right!";
			}

			attempt.innerHTML = tries + " attempt";
			if (tries > 1) {
				attempt.innerHTML += "s";
			}
		}
	}
}
