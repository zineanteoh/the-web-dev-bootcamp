var secretNumber = Math.round(Math.random() * 10);
var guess;
while (guess !== secretNumber) {
	guess = Number(prompt("Guess a number"));
	if (guess === secretNumber) {
		alert("You got it!");
	} else if (guess > secretNumber) {
		alert("Too high. Guess again!");
	} else {
		alert("Too low. Guess again!");
	}
}

alert("The number is " + secretNumber);
