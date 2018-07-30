var express = require('express');

const app = express.Router();

var fs = require("fs");
const datos = fs.readFileSync('./routers/data.json');

function procesar(req, res, next){
	const { txt } = req.params;
	req.params = txt;
	next()
}

function filtrar (req, res, next){
	const { categoriaid } = req.params;
	let data = [];
	JSON.parse(datos).categories.map((item)=> {
		if(item.id === parseInt(categoriaid))
			data.push(item);		
	});
	req.params = data;
	next();
}


app.get('/', (req, res) => {
	res.status(200).send("Respuesta de server");
});


// http://localhost:3002/api/data/all
app.get('/all', (req, res) => {
    console.log('procesando');
	res.status(200).send(datos);
});

// http://localhost:3002/api/data/:categoriaid
app.get('/:categoriaid', filtrar, (req, res) => {
    console.log('procesando');
	res.status(200).send(req.params);
});

//localhost:3002/api/data/2
app.get('/:txt',procesar, (req, res) => {
    console.log('procesando');
	res.status(200).send(req.params);
});




app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = app;