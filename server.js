
var data = require('./routers/data');
var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static('public'));

app.use('/api/data', data);

server.listen(3002, function(err){
	if(err) return console.log('Hubo un error'), process.exit(1);
  	console.log("Servidor corriendo en http://localhost:3002")
});