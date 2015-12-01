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


function ask(ques) {
    return '\n{question}:\nA : {options.0}\nB : {options.2}\nC : {options.2}\nD : {options.3}\n'.format(ques);
}
