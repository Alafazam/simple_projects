var readlineSync = require('readline-sync');


questions = ['May I have your name? :', 'What is your favorite food? :'];


for (var i = 0; i < questions.length; i++) {
    
    answers = readlineSync.question(questions[i]);
    console.log(answers);

};


// // Wait for user's response. 
// console.log('Hi ' + userName + '!');

// // Handle the secret text (e.g. password). 
// var favFood = readlineSync.question('What is your favorite food? :', {
//     hideEchoBack: true // The typed text on screen is hidden by `*` (default). 
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');
