var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


var connectedClients = {};

io.on('connection', function(socket) {

    //added clients
    socket.on("setClientId", function(data) {
        connectedClients[data.id] = {
            id: data.id, //adds key to a map
            senderName: data.senderName
        }
        console.log(connectedClients);
    });

    //removes clients
    socket.on("deleteSharedById", function(data) {
        delete connectedClients[data.id]; //removes key from map
        socket.broadcast.emit("deleteShared", {
            id: data.id
        }); //send to sender
    });

    //erases canvas
    socket.on("eraseRequestById", function(data) {
        socket.broadcast.emit("eraseShared", {
            id: data.id
        });
    });

    //returns back a list of clients to the requester
    socket.on("getUserList", function(data) {
        socket.emit("setUserList", connectedClients); //send to sender
    });

    //request to share
    socket.on("requestShare", function(data) {
        socket.broadcast.emit("createNewClient", {
            listenerId: data.listenerId,
            senderId: data.senderId,
            senderName: data.senderName
        });
    });

    //confirm did share
    socket.on("confirmShare", function(data) {
        socket.broadcast.emit("setConfirmShare", {
            isSharing: data.isSharing,
            senderId: data.senderId,
            listenerId: data.listenerId,
            senderName: data.senderName
        });
    });

    //drawing data
    socket.on('drawRequest', function(data) {
        socket.broadcast.emit('draw', {
            x: data.x,
            y: data.y,
            type: data.type,
            isTouchDevice: data.isTouchDevice,
            color: data.color,
            stroke: data.stroke,
            isLineDrawing: data.isLineDrawing,
            isErase: data.isErase,
            id: data.id
        });
    });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
