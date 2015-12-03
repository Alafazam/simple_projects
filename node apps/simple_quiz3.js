var readlineSync = require('readline-sync'),
	format = require('string-format'),
	chalk = require('chalk').styles;

format.extend(String.prototype);

question = {
    'question': 'In Java, Which method must be implemented by all threads?',
    'options': ['wait()', 'start()', 'stop()', 'run()'],
    'correctOption': 'd',
    'correctAnswer': 'run()'
}


answer = readlineSync.question(ask(question), {
    limit: ['a', 'b', 'c', 'd']
});

if (answer == question.correctOption) {
    console.log('Yes, correct answer is {correctAnswer} method'.format(question));
} else {
    console.log('No, correct answer is {correctAnswer} method'.format(question));
};


function ask(ques) {
    return '\n{question}:\na : {options.0}\nb : {options.2}\nc : {options.2}\nd : {options.3}\n'.format(ques);
}
