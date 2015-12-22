var net = require("net");
var chatServer = net.createServer();
clientList = []
console.log("chat Server started");




chatServer.on('connection', function(client) {
    console.log("Client Connnected");
    client.name = client.remoteAddress + ':' + client.remotePort
    client.write('Hi ' + client.name + '!\n');

    clientList.push(client)

    client.on('data', function(data) {
        broadcast(data, client)
    });

    client.on('end', function() {
        clientList.splice(clientList.indexOf(client), 1)
    })
    
    client.on('error', function(e) {
        console.log(e)
    });
});



function broadcast(message, client) {
    var cleanup = []

    for (var i = 0; i < clientList.length; i += 1) {

        if (client !== clientList[i]) {
            if (clientList[i].writable) {
                clientList[i].write(client.name + ": " + message)
            } else {
                cleanup.push(clientList[i])
                clientList[i].destroy()
            }
        }

    }



};


chatServer.listen(9000)
