// Readline examples

var readlineSync = require('readline-sync');

// Wait for user's response. 
var userName = readlineSync.question('May I have your name? :');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password). 
var favFood = readlineSync.question('What is your favorite food? :', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default). 
});

console.log('Oh, ' + userName + ' loves ' + favFood + '!');


if (readlineSync.keyInYN('Do you want this module?')) {
    // 'Y' key was pressed. 
    console.log('Installing now...');
    // Do something... 
} else {
    // Another key was pressed. 
    console.log('Searching another...');
    // Do something... 
}

var animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'];

var index = readlineSync.keyInSelect(animals, 'Which animal?');

console.log('Ok, ' + animals[index] + ' goes to your room.');


var MAX = 60,
    MIN = 0,
    value = 30,
    key;
console.log('\n\n' + (new Array(20)).join(' ') +
    '[Z] <- -> [X]  FIX: [SPACE]\n');
while (true) {
    console.log('\x1B[1A\x1B[K|' +
        (new Array(value + 1)).join('-') + 'O' +
        (new Array(MAX - value + 1)).join('-') + '| ' + value);
    key = readlineSync.keyIn('', {
        hideEchoBack: true,
        mask: '',
        limit: 'zx '
    });
    if (key === 'z') {
        if (value > MIN) {
            value--;
        }
    } else if (key === 'x') {
        if (value < MAX) {
            value++;
        }
    } else {
        break;
    }
}
console.log('\nA value the user requested: ' + value);


readlineSync.promptCLLoop({
    add: function(target, into) {
        console.log(target + ' is added into ' + into + '.');
        // Do something... 
    },
    remove: function(target) {
        console.log(target + ' is removed.');
        // Do something... 
    },
    bye: function() {
        return true;
    }
});
console.log('Exited');


pressedKey = readlineSync.keyIn("What is your age\nA :10\nB :20\n", {
    limit: '${A-D}'
});
console.log(pressedKey)


readlineSync.setDefaultOptions({
    limit: ['green', 'yellow', 'red']
});

a1 = readlineSync.question('Which color of signal? :'); // Input is limited to 3 things. 
a2 = readlineSync.question('Which color of signal? :'); // It's limited yet. 
a3 = readlineSync.question('What is your favorite color? :', {
    limit: null
}); // It's unlimited temporarily. 

a4 = readlineSync.question('Which color of signal? :'); // It's limited again. 

readlineSync.setDefaultOptions({
    limit: ['beef', 'chicken']
});
a5 = readlineSync.question('Beef or Chicken? :'); // Input is limited to new 2 things. 
a6 = readlineSync.question('And you? :'); // It's limited to 2 things yet.


readlineSync.setDefaultOptions({
    prompt: '$ '
});

// Display the memory usage always. 
readlineSync.setDefaultOptions({
    prompt: { // Simple Object that has toString method. 
        toString: function() {
            var rss = process.memoryUsage().rss;
            return '[' + (rss > 1024 ? Math.round(rss / 1024) + 'k' : rss) + 'b]$ ';
        }
    }
});

secret = readlineSync.question('Please whisper sweet words :', {
    hideEchoBack: true,
    mask: '\u2665'
});
