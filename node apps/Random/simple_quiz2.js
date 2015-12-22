var readlineSync = require('readline-sync'),
    util = require('util');

question = {
    'question': 'In Java, Which method must be implemented by all threads? :',
    'options': ['wait()', 'start()', 'stop()', 'run()'],
    'correctOption': 'D',
    'correctAnswer': 'run()'
}


answer = readlineSync.question(ask(question), {
    limit: ['A', 'B', 'C', 'D']
});

if (answer == question.correctOption) {
    console.log(util.format('Yes, correct answer is %s method', question.correctAnswer));
} else {
    console.log(util.format('No, correct answer is %s method', question.correctAnswer));
};


function ask(question) {
    return util.format('\n%s:\nA : %s\nB : %s\nC : %s\nD : %s\n', question.question, question.options[0], question.options[1], question.options[2], question.options[3]);
}
