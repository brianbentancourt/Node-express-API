const morgan = require('morgan');
const bodyparser = require('body-parser'); // convertir json
const express = require('express');
const app = express();

const productsRoutes = require('./routes/products');
//const calcRouters = require('./routes/calc');

// settings
var port = process.env.PORT || 3000 
app.set('json spaces', 4);

// middlewares
app.use(morgan('dev')); 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

// routes
app.use('/products', productsRoutes);
//app.use('/calc', calcRouters());

app.get('/', (eq, res)=>{
    res.send('Ver codigo fuente en ===> https://github.com/brianbentancourt/Node-express-API')
})

// start server
app.listen(port, () => {
    console.log('Corriendo servidor en puerto', port);
});