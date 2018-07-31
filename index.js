const morgan = require('morgan');
const bodyparser = require('body-parser'); // convertir json
const express = require('express');
const app = express();

const productsRoutes = require('./routes/products');
//const calcRouters = require('./routes/calc');

// settings
app.set('json spaces', 4);

// middlewares
app.use(morgan('dev')); 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

// routes
app.use('/products', productsRoutes);
//app.use('/calc', calcRouters());

// start server
app.listen(3000, () => {
    console.log('Corriendo servidor en puerto', 3000);
});