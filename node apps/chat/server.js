var express = require('express'); 
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var connections = [];

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

io.on('connection', function(socket){

    var number = socket.id;
    var username = '';

    socket.emit('request login',{'id':number});

    socket.on('username',function (data) {
        username = data.username;
        connections['id'] = username;
    })


    socket.on('chat message', function(msg){
        io.emit('chat message',{'username':username,'msg':msg});
        console.log(username + ' said ' + msg);
    });


    socket.on('disconnect', function(){
        console.log(username +' got disconnected');
  });




});

http.listen(3000, function(){
    console.log('listening on *:3000');
});


// <!-- made by Alaf azam khan -->