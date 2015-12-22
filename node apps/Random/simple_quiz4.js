var readlineSync = require('readline-sync'),
    format = require('string-format'),
    chalk = require('chalk').styles;

format.extend(String.prototype);

questions = [{
    'question': 'In Java, Which method must be implemented by all threads?',
    'options': ['wait()', 'start()', 'stop()', 'run()'],
    'correctOption': 'd',
    'correctAnswer': 'run()'
}, {
    'question': 'In Java, What is the default priority of a thread?',
    'options': ['5', '10', '0', '15'],
    'correctOption': 'a',
    'correctAnswer': '5'

}]

var answers_right = [];
var answer_by_user = [];
var right_answers = 0;

for (var i = 0; i < questions.length; i++) {
    answer = readlineSync.question(ask(questions[i], i + 1), {
        limit: ['a', 'b', 'c', 'd']
    });
    answer_by_user[i] = answer;
    if (answer == questions[i].correctOption) {
        answers_right[i] = true;
        right_answers++;
    } else {
        answers_right[i] = false;
    };
}

console.log('\nYou got ' + right_answers + ' / ' + questions.length + ' correct \n');

console.log('Right option \t\t Your answer \t\t status');

for (var i = 0; i < answers_right.length; i++) {
    console.log(questions[i]['correctOption'] + ' \t\t\t ' + answer_by_user[i] + ' \t\t\t '+ answers_right[i] );
};

function ask(ques, i) {
    return '\n' + i + ': {question}:\na : {options.0}\nb : {options.2}\nc : {options.2}\nd : {options.3}\n'.format(ques);
}
