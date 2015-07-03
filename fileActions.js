var Question = require('./question.js');



function read_questions(err, file){ 
    if (err) {
        console.log(err);
    }
    var questions = JSON.parse(file)
    
    var list_of_questions = []
var question = new Question;

questions.forEach(function(question)
{
	list_of_questions.push(new Question(question.id, question.question, question.answer))
})

	console.log(list_of_questions)
}


module.exports = read_questions;
