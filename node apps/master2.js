var fs = require('fs');
var child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.spawn('node', ['worker.js', i]);
    workerProcess.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });
    workerProcess.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
    });
    workerProcess.on('close', function(code) {
        console.log('child process exited with code ' + code);
    });
}
