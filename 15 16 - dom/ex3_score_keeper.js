var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("input[type='number']");
var p = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var endGame = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
	if (!endGame) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			endGame = true;
		}
		p1Display.textContent = p1Score;
	}
})

p2Button.addEventListener("click", function() {
	if(!endGame) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			endGame = true;
		}
		p2Display.textContent = p2Score;
	}
})

resetButton.addEventListener("click", function() {
	reset();
})

function reset() {
	endGame = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");	
}

numInput.addEventListener("change", function() {
	p.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})