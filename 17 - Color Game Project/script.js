var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset(numSquares);
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for(var j = 0; j < modeButtons.length; j++) {
				modeButtons[j].classList.remove("selected");
			}
			this.classList.add("selected");

			numSquares = (this.textContent === "Easy") ? 3 : 6;
			reset(numSquares);
		})
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
	// add click listeners to squares
		squares[i].addEventListener("click", function() {
				// get color of clicked square
				var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(pickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
}

function reset(numSquares) {
	// generate all new colors
	colors = generateRandomColors(numSquares);

	// pick new random color
	pickedColor = pickColor();

	// change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Color";
	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
	reset(numSquares);
})

function changeColors(color) {
	// loop through all squares, change to given color
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add num random colors to array
	for(var i = 0; i < num; i++) {
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return ("rgb(" + red + ", " + green + ", " + blue + ")");
}