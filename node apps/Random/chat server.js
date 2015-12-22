var net = require("net");
var chatServer = net.createServer();
clientList = []
console.log("chat Server started");




chatServer.on('connection', function(client) {
    console.log("Client Connnected");

    client.write('Hi!\n');
    clientList.push(client)
    client.on('data', function(data) {
        for (var i = 0; i < clientList.length; i += 1) {
            //write this data to all clients
            clientList[i].write(data)
        }
    })
    console.log("Client Disconnnected");

});

chatServer.listen(9000)
