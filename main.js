
var fs = require('fs'),

 fileAction = require('./fileActions.js');

fs.readFile("./question.json", 'utf8', fileAction);


// var question = new Question();


// var question = prompt()
			  