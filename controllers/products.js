const {products} = require('../data.json');

module.exports = {
    getProducts: (req, res) =>{
        res.json({products})
    },
    addProduct:(req, res) =>{
        // const prod = req.body.name;
        const {name} = req.body;

        products.push({
            name,
            id:products.length
        });

        res.json({
            "success": true,
            "msg": "successfully added"
        });
    },
    updateProduct:(req, res) =>{
        const { id } = req.params;
        const { name } = req.body;
        
        products.map((item) =>{
            if(item.id === Number(id)){
                item.name = name;
            }
        });
        
        res.json({
            "success": true,
            "msg": "successfully update"
        })
        
    },
    deleteProduct:(req, res) =>{
        const { id } = req.params;
        
        products.forEach((item, i) => {
            if(item.id === Number(id)){
                products.splice(i,1);
            }
        });
        
        res.json({
            "success": true,
            "msg": "successfully deleted"
        })
    },
    
};