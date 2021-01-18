var answer = prompt("Are we there yet?");

while (answer.toLowerCase().indexOf("yes") == -1) {
	answer = prompt("Are we there yet?");
}

alert("we made it boyz");