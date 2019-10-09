// SERVER CONFIG

const express = require('express')
var bodyParser = require('body-parser');
const app = express();
const hbs = require('express-handlebars');
const path = require('path')

var functions = require("./student-work.js")
var function_names = Object.keys(functions).slice(0, 5);

app.set('view engine', 'hbs');
app.set('views', __dirname +  "/views");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("assets"))

app.engine( 'hbs', hbs( {
	extname: 'hbs',
	layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials/'
}));

const server = app.listen(3000, () => {
	console.log(`Express running at localhost:${server.address().port}`);
});

//ROUTES
var current_health = 100;
var game_dialogue = "";

var correct_dialogue = `ROAAAAR Nice one! This one won't be so easy though. `;
var incorrect_dialogue = `ROOOOOOOOOAR Nice try, but you'll never beat me at this rate! The correct answer was `;


app.get('/', (req, res) => {
	res.render('game', {layout: "application.hbs", 
						dragon_dialogue: `ROAAAAAAAAR! Enter your name below!`, 
						whichPartial: () => { return "_name" }});
});

app.get('/intro', (req, res) => {
	var first_name = req.query.firstname;
	var last_name = req.query.lastname;

	res.render('game', {layout: "application.hbs", 
						dragon_dialogue: `ROAAAAAAAAR! Welcome to Dragonometry, ${functions.full_name(first_name, last_name)}! If you answer enough\
										  of my math questions correctly, you can defeat me. Be careful, however; every wrong\
										  answer will cause me to grow in strength!`, 
						whichPartial: () => { return "_accept" }});
});

app.get('/game', (req, res) => {
	var function_seed = rand_int(0, 5);
	var func_name = function_names[function_seed]
	var inputs = get_inputs(func_name);
	var input_string = inputs.join(",");
	var dragon_dialogue = ask_question(func_name, inputs);

	res.render('game', {layout: "application.hbs",
						inputs: input_string,
						func_name: func_name,
						dragon_dialogue: game_dialogue + dragon_dialogue, 
						current_health: current_health, 
						whichPartial: () => { return "_arithmetic" }});
});

app.post('/game', (req, res) => {
    var inputsAsStrings = req.body.inputs.split(",");

    var inputs = [];
    for (let i = 0; i < inputsAsStrings.length; i++) {
        inputs.push(parseInt(inputsAsStrings[i]));
    }

	var func_name = req.body.func_name;
	var func = functions[func_name]
	var player_solution = parseFloat(req.body.solution).toFixed(2);
	var brain_solution = (typeof func.apply(this, inputs) == "string") ? func.apply(this, inputs) : parseFloat(func.apply(this, inputs)).toFixed(2);

	game_dialogue = (player_solution == brain_solution) ? `${correct_dialogue}` :  `${incorrect_dialogue} ${brain_solution}. `;
	current_health = (player_solution == brain_solution) ? current_health - Math.abs(parseFloat(player_solution)) : current_health + Math.abs(parseFloat(player_solution));

	if (current_health <= 0) {
		res.redirect("/win");
	}

	res.redirect("/game");
});

app.get('/win', (req, res) => {
	current_health = 100;

	res.render('game', {layout: "application.hbs",
						dragon_dialogue: "ROOOOAR You Won! Congratulations. Are you ready to play again?", 
						whichPartial: () => { return "_accept" }});
});

app.get('/win', (req, res) => {
	current_health = 100;

	res.render('game', {layout: "application.hbs",
						dragon_dialogue: "ROOOOAR You Won! Congratulations. Are you ready to play again?", 
						whichPartial: () => { return "_accept" }});
});

//HELPERS 

function ask_question(operation, inputs) {
	if (["add", "subtract", "multiply", "divide"].includes(operation)) {
		inputs = inputs.slice(0, 2); 
	}

	var inputs_besides_last = inputs.slice(0, -1).join(', ');
	var last_input = inputs[inputs.length - 1];

	return `RAAAAAARRRGHHHH! ${func_name_helper(operation)} ${inputs_besides_last} ${and_by_helper(operation)} ${last_input}!`
}

function and_by_helper(operation) {
	if (["add", "subtract", "add_five"].includes(operation)) {
		return "and";
	} else if (["multiply", "divide"].includes(operation)) {
		return "by";
	}
}

function func_name_helper (func) {
	if (func == "add_five") {
		return "Add"
	} else {
		return sentence_case(func);
	}
}

function sentence_case(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}


function rand_int(lower, upper) {
	return Math.floor(Math.random() * upper + lower); 
}

function get_inputs(operation) {
	inputs = [];

	n = (operation == "add_five") ? 5 : 2 

	for (i = 0; i < n; i++) {
		inputs.push([rand_int(0, 13)])
	}

	return inputs
}
