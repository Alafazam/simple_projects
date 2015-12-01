var format = require('string-format');
// It can be used in two modes function mode and method mode.

// function mode

console.log(format('Hello, {}!', 'Alice'));
// =>	Hello, Alice!



// method mode

format.extend(String.prototype);
console.log('Hello, {}!'.format('Alaf'));
// =>	Hello, Alaf!





// We will be using only method mode.




// Dot notation may be used to reference object properties:

var bobby = {firstName: 'Bobby', lastName: 'Fischer'}
var garry = {firstName: 'Garry', lastName: 'Kasparov'}
 
console.log('{0.firstName} {0.lastName} vs. {1.firstName} {1.lastName}'.format(bobby, garry));
// => 'Bobby Fischer vs. Garry Kasparov' 




// Applying this to our qurstions 

ques = {
    'question': 'In Java, Which method must be implemented by all threads? :',
    'options': ['wait()', 'start()', 'stop()', 'run()'],
    'correctOption': 'D',
    'correctAnswer': 'run()'
}
console.log('\n{question}:\nA : {options.0}\nB : {options.2}\nC : {options.2}\nD : {options.3}\n'.format(ques));
// =>	In Java, Which method must be implemented by all threads? ::
// 		A : wait()
// 		B : stop()
// 		C : stop()
// 		D : run()
