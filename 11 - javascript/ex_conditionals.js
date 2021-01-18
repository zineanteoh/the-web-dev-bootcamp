var age = prompt("What is your age?");

if (age < 0) {
    console.log("Error");
} 
if (age == 21) {
    console.log("happy 21st birthday");
}
if (age % 2 == 1) {
	console.log("your age is odd! so are you!");
} 
if (age % Math.sqrt(age) == 0) {
	console.log("Your age is a perfect square!");
}