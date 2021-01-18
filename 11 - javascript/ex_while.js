console.log("\n\nPrint all numbers between -10 and 19");

var i = -10;
while (i <= 19) {
	console.log(i++);
}

console.log("\n\nPrint all even numbers between 10 and 40");

var i = 10;
while(i <= 40) {
	console.log(i);
	i+=2;
}

console.log("\n\nPrint all odd numbers between 300 and 333");

var i = 300;
while(i <= 333) {
	if (i % 2 == 0) i++;
	else {
		console.log(i);
		i+=2;
	}
}

console.log("\n\nPrint all numbers directly divisible by 5 AND 3 between 5 and 50");

var i = 5;
while(i <= 50) {
	if (i % 15 == 0) {
		console.log(i);
	}
	i++;
}