var button = document.querySelector("button");

button.addEventListener("click", function() {
	document.body.style.background = document.body.style.background === "purple" ? "white" : "purple";
});