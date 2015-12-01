var readlineSync = require('readline-sync'),
	format = require('string-format');
format.extend(String.prototype);

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
    console.log('Yes, correct answer is {correctAnswer} method'.format(question));
} else {
    console.log('No, correct answer is {correctAnswer} method'.format(question));
};


function ask(ques) {
    return '\n{question}:\nA : {options.0}\nB : {options.2}\nC : {options.2}\nD : {options.3}\n'.format(ques);
}
