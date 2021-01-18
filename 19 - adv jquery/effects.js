
// Fade out
// $("button").on("click", function() {
// 	$("div").fadeOut(1000, function() {
// 		// $(this).remove();
// 	});
// })

// Fade toggle
// $("button").on("click", function() {
// 	$("div").fadeToggle(500);
// })

$("button").on("click", function() {
	// $("div").slideDown();
	// $("div").slideUp();
	$("div").slideToggle(1000, function() {
		console.log("sliding donee");
	});
})