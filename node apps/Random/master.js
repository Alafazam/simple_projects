var fs = require('fs');
var child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.exec('node worker.js ' + i,
        function(error, stdout, stderr) {
            if (error) {
                console.log(error.stack);
                console.log('Error code: ' + error.code);
                console.log('Signal received: ' + error.signal);
                console.log('stderr: ' + stderr);
            }
            console.log('stdout: ' + stdout);
        });
    workerProcess.on('exit', function(code) {
        console.log('Child process exited with exit code ' + code);
    });
}
