var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var connections = [];


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    connections.push(socket);

    console.log('a user connected');

    socket.on('chat message', function(msg){
        
        if (msg=='connections') {
            io.emit('chat message', connections);
        }else{
            io.emit('chat message', msg);
        }
        
        console.log(msg);

    });


    socket.on('disconnect', function(){
        console.log('user disconnected');
  });




});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
