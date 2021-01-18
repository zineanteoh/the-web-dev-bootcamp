

function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	if (arr.length === 0) return true;
	var first = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if (arr[i] !== first) return false;
	}
	return true;
}

function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}

function max(arr) {
	var mx = arr[0];
	arr.forEach(function(item) {
		if (item > mx) mx = item;
	});
	return mx;
}