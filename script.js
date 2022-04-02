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

function checkAnswer(event) {
	event.preventDefault();
	if (!exit) {
		if (input.value.length == len) {
			if (input.value == answer) {
				tries++;
				win.innerHTML = "You won!";
				exit = true;
			} else {
				tries++;
				win.innerHTML = "Not quite right!";
				hint.innerHTML += "</br>";
				for (var i = 0; i < len; i++) {
					if (input.value.charAt(i) != answer.charAt(i) && !(letterinstr(input.value.charAt(i))) ) {
						hint.innerHTML += '<span style="color: #595959">' + input.value.charAt(i) + "</span>";
					} else if (input.value.charAt(i) != answer.charAt(i) && (letterinstr(input.value.charAt(i))) ) {
						hint.innerHTML += '<span style="color: #bebe00">' + input.value.charAt(i) + "</span>";
					} else if (input.value.charAt(i) == answer.charAt(i)) {
						hint.innerHTML += '<span style="color: #00ff00">' + input.value.charAt(i) + "</span>";
					}
				}
			}

			attempt.innerHTML = tries + " attempt";
			if (tries > 1) {
				attempt.innerHTML += "s";
			}

		}
	}
}
