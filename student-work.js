// YOUR CODE BELOW THIS LINE

// define a function called "add", with inputs x and y, which returns the sum of x and y
// test by running `npm test tests/addition.spec` in your terminal

function add(x, y) {
	return x + y; 
}

// define a function called "subtract", with inputs x and y, which returns the difference of x and y
// test by running `npm test tests/subtraction.spec`

function subtract(x, y) {
	return x - y;
}

// define a function called "multiply", with inputs x and y, which returns the product of x and y
// test by running `npm test tests/multiply.spec`

function multiply(x, y) {
	return x * y;
}

// define a function called "divide", with inputs x and y, which returns the result of x/y
// test by running `npm test tests/divide.spec`

function divide(x, y) {
	return x / y;
}

// define a function called "full_name", with inputs "first" and "last", which returns a single string containing the player's full name
// test by running `npm test tests/full-name.spec`

function full_name(first, last) {
	return `${first} ${last}`
}

// define an array called "list_of_five" with five numbers in it.
// how to make an array: https://www.w3schools.com/js/js_arrays.asp
// test by running `npm test tests/list-of-five.spec`

var list_of_five = [5, 6, 2, 4, 5]

// define a function called "get_number" which takes in one array of length 5 and a number corresponding to position in the array, and returns the
// value in the array stored at the corresponding position 
// test by running `npm test tests/get-number.spec`

function get_number(arr, n) {
	return arr[n];
}

// define a function called "add_five" which takes in one array of length 5 and returns the sum of all numbers in the array
// test by running `npm test tests/add-five.spec`

function add_five(arr) {
	var sum = 0;
	var counter = 0; 

	while (counter < 5) {
		sum += arr[counter] 
		counter++;
	}

	return sum;
}

// define an array and call it "my_favorite_things" and store at least five strings inside of it. 
// these will be the things you recieve as rewards for beating the game! 
// array information again for convenience: https://www.w3schools.com/js/js_arrays.asp
// test by running `npm test tests/favorite-array.spec`

var my_favorite_things = ["Solange Knowles", "DaBaby", "Big Thief", "Frank Ocean", "Pinegrove"]; 

// define a function called "favorite_things_logger" which prints all items in your list using console.log
// how to make a while loop: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
// test by running `npm test tests/favorite-array.spec`

function favorite_things_logger(favorite_array) {
	var counter = 0;

	while (counter < favorite_array.length) {
		console.log(favorite_array[counter])
		counter++;
	}
}

// YOUR CODE ABOVE THIS LINE

// STARTER CODE! DO NOT CHANGE

module.exports = { add: ((typeof add == "undefined") ? function add(x, y) { return "291666" } : add), 
				   subtract: ((typeof subtract == "undefined") ? function subtract() { return "3 Gazillion" } : subtract), 
				   divide:   ((typeof divide == "undefined")   ? function divide() { return "sksksksksksksksks and i--" } : divide), 
				   multiply: ((typeof multiply == "undefined") ? function multiply() { return "ILLEGAL MEME CONTENT" } : multiply), 
				   add_five: ((typeof add_five == "undefined") ? function add_five() { return "sksksksksksksksks and i--" } : add_five), 
				   full_name: ((typeof full_name == "undefined") ? function full_name() { return "Logan Paul" } : full_name),
				   list_of_five: ((typeof list_of_five == "undefined") ? [] : list_of_five),
				   get_number: ((typeof get_number == "undefined") ? function get_number() { return NaN } : get_number),
				   my_favorite_things: ((typeof my_favorite_things == "undefined") ? ["day-old toast", "dry pastries", "a full bucket of clams", "stale memes", "YouTube Premium"] : my_favorite_things ),
				   favorite_things_logger: ((typeof favorite_things_logger == "undefined") ? function get_number() { return null } : favorite_things_logger ) }
