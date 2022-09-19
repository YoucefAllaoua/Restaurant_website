let input = document.querySelectorAll("input");
console.log(input);
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	inputCheck();
});
function inputCheck() {
	for (let i = 0; i < input.length; i++) {
		if (i === 0 || i === 1 || i === 3) {
			if (input[i].value == "") {
				setError(input[i]);
			} else {
				setSuccess(input[i]);
			}
		}

		if (i === 2) {
			if (/(\w || \W){0,64}@\w{1,6}.\w{1,10}/.test(input[i].value)) {
				setSuccess(input[i]);
			} else {
				setError(input[i]);
			}
		}
	}
}

function setSuccess(e) {
	e.classList.add("valid");
	let parent = e.parentElement;
	let notice = parent.querySelector(".state_text");
	notice.textContent = "Correct";
	notice.style.color = "green";
	notice.style.fontFamily = "Poppins";
}
function setError(e) {
	e.classList.add("failed");
	let parent = e.parentElement;
	let notice = parent.querySelector(".state_text");
	notice.textContent = "Please fill this Field!";
	notice.style.color = "red";
	notice.style.fontFamily = "Poppins , sans-serif";

}
