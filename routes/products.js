const express = require('express');
const router = express.Router();

const {products} = require('../data.json');

router.route('/')
.get((req, res) =>{
    res.json({products})
})
.post((req, res) =>{
    // const prod = req.body.name;
    const {name} = req.body;
    
    products.push({
        name,
        id:products.length
    });
    
    res.json(products);
})

module.exports = router;