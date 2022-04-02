let answer = "hello";
let form = document.querySelector('form');

let input = document.querySelector('input');

function hello(event) {
	event.preventDefault();
	let name = document.querySelector('#result');
	if (input.value.length == 5) {
		name.innerHTML = `${input.value}`;
	} else {
		name.innerHTML = "";
	}
}
