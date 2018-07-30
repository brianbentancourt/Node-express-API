
var data = require('./routers/data');
var express = require('express');
var app = express();
var server = require('http').Server(app);

var port = process.env.PORT || 3002; 

app.use(express.static('public'));

app.use('/api/data', data);

server.listen(port, function(err){
	if(err) return console.log('Hubo un error'), process.exit(1);
  	console.log("Servidor corriendo en puerto " + port);
});