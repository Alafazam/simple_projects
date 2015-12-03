var fs = require('fs');
var child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var worker_process = child_process.fork("worker.js", [i]);
    worker_process.on('close', function(code) {
        console.log('Child process exited with code ' + code);
    });
}
