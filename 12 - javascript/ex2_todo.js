var todos = [];

window.setTimeout(function() {
	var choice = prompt("What would you like to do?");

	while (choice.toLowerCase() != "quit") {
		if (choice.toLowerCase() === "new") {
			addTodo();
		}
		else if (choice.toLowerCase() === "list") {
			listTodos();
		}
		else if (choice.toLowerCase() === "delete") {
			deleteTodo();
		}
		choice = prompt("What would you like to do?");
	}
	console.log("OK YOU QUIT THE APP.");
}, 500);



function addTodo() {
	var item = prompt("Enter a new todo");
	todos.push(item);
	console.log(item + " added to the list.");
}

function listTodos() {
	console.log("**********");
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("**********");
}

function deleteTodo() {
	var index = prompt("Enter item index to delete");
	if (index < todos.length && index >= 0) {
		todos.splice(index, 1);
		console.log("Item deleted.");
	} else {
		console.log("Index out of bound. No item deleted")
	}
}