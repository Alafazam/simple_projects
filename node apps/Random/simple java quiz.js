var readlineSync = require('readline-sync');


questions = ['May I have your name? :', 'What is your favorite food? :'];


for (var i = 0; i < questions.length; i++) {
    
    answers = readlineSync.question(questions[i]);
    console.log(answers);

};
