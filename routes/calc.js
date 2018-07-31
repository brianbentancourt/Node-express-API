const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) =>{
    
})
.post((req, res) =>{
    
})

module.exports = router;





app.get('/', (eq, res)=>{
    res.send('Bienvenidos')
})

app.get('/random/:n1/:n2', (req, res)=>{
    const min = parseInt(req.params.n1);
    const max = parseInt(req.params.n2);
    
    if(isNaN(min) || isNaN(max)){
        res.status(404);
        res.json({"error": "Bad request"});
        return;
    }
    
    let result = Math.floor(Math.random() * (max-min) + min);

    res.status(200).json({"valor": result});
})

app.post('/', (req, res)=>{
    res.send('guardando..')
})

app.put('/', (req, res)=>{
    res.send('actualizando..')
})

app.delete('/', (req, res)=>{
    res.send('borrando..')
})