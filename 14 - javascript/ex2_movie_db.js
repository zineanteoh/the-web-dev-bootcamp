
var movies = [
	{
		title: "Mulan", 
		rating: 3, 
		hasWatched: true
	},
	{
		title: "Big Short", 
		rating: 4.5, 
		hasWatched: true
	},
	{
		title: "Star Wars",
		rating: 3,
		hasWatched: false
	}, 
	{
		title: "Frozen 2",
		rating: 4,
		hasWatched: true
	}
]

function buildString(movie) {
	var result = "You have ";
	result += (movie.hasWatched) ? "watched " : "not seen ";
	result += "\"" + movie.title + "\"" + " - ";
	result += movie.rating + " stars";
	return result;
}

movies.forEach(function(movie) {
	console.log(buildString(movie));
});