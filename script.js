let exit = false;
let url = "words";
let maxtries = 6;
	
let input = document.querySelector('input');
let win = document.querySelector('#win');
let hint = document.querySelector('#hint');
let attempt = document.querySelector('#attempt');
	
let tries = 0;

fetch(url)
.then(response => response.text())
.then(wordlist => wordlist.split('\n'))
.then(wordlist => main(wordlist));

function addGuessDisplay(answer, guess, len, hint) {
	
	let cat = ""
	for (var i = 0; i < len; i++) {
		if (guess.charAt(i) != answer.charAt(i) && !(answer.includes(guess.charAt(i))) ) {
			cat += '<span style="color: #595959">' + guess.charAt(i) + "</span>";
		} else if (guess.charAt(i) != answer.charAt(i) && (answer.includes(guess.charAt(i))) ) {
			cat += '<span style="color: #bebe00">' + guess.charAt(i) + "</span>";
		} else if (guess.charAt(i) == answer.charAt(i)) {
			cat += '<span style="color: #00ff00">' + guess.charAt(i) + "</span>";
		}
	}
	hint.innerHTML += cat + "</br>";
	
}

function checkAnswer(event, answer, len, wordlist) {
	
	event.preventDefault();
	input.value = input.value.toLowerCase();

	if (!exit) {
		if (wordlist.includes(input.value)) {
			addGuessDisplay(answer, input.value, len, hint);
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

function main(wordlist) {
	
	let wordlen = wordlist.length;
	let randomword = Math.floor(Math.random() * wordlen);

	let answer = wordlist[randomword];
	console.log(answer);
	let len = answer.length;
	
	input.setAttribute("maxlength", len);
	hint.innerHTML = "Word is of length: " + len + "</br>";
	
	let form = document.querySelector('form');
	form.addEventListener("submit", function() { checkAnswer(event, answer, len, wordlist); });

}
