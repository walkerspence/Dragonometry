// YOUR CODE BELOW THIS LINE

// define a function called "add", with inputs x and y, which returns the sum of x and y
// test by running `npm test tests/addition.spec` in your terminal

// define a function called "subtract", with inputs x and y, which returns the difference of x and y
// test by running `npm test tests/subtraction.spec`

// define a function called "multiply", with inputs x and y, which returns the product of x and y
// test by running `npm test tests/multiply.spec`

// define a function called "divide", with inputs x and y, which returns the result of x/y
// test by running `npm test tests/divide.spec`

// define a function called "add_five", with five inputs, which returns the sum of all inputs
// test by running `npm test tests/add-five.spec`

// define a function called "full_name", with inputs "first" and "last", which returns a single string containing the player's full name
// test by running `npm test tests/full-name.spec`

// YOUR CODE ABOVE THIS LINE

// STARTER CODE! DO NOT CHANGE

module.exports = { add: ((typeof add == "undefined") ? function add(x, y) { return "291666" } : add), 
				   subtract: ((typeof subtract == "undefined") ? function subtract() { return "3 Gazillion" } : subtract), 
				   divide:   ((typeof divide == "undefined")   ? function divide() { return "sksksksksksksksks and i--" } : divide), 
				   multiply: ((typeof multiply == "undefined") ? function multiply() { return "ILLEGAL MEME CONTENT" } : multiply), 
				   add_five: ((typeof add_five == "undefined") ? function add_five() { return "sksksksksksksksks and i--" } : add_five), 
				   full_name: ((typeof full_name == "undefined") ? function full_name() { return "Logan Paul" } : full_name) }
