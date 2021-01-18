// Check off specific todos by clicking
// ... this adds the event listener of an anonymous function
// ... to the ENTIRE 'ul', specifically the 'li', 
// ... including all future 'li'
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Add enter event listener to text input
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// grab todo Text from text input
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");

	}

})

// Select icon
$(".fa-plus-square").click(function() {
	$("input[type='text']").fadeToggle();
})