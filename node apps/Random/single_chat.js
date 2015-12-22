var net = require('net')
var chatServer = net.createServer()

console.log("chat Server started");


chatServer.on('connection', function(client) {
    console.log("Client Connnected");
    client.write('Hi!\n');
    client.write('Bye!\n');
    client.end();
    console.log("Client Disconnnected");

})
chatServer.listen(9000)
