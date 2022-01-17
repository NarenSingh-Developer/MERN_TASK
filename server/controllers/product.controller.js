const Product = require("../model/product");

module.exports = {
   async getProduct(req,res) {
        try{
            const data = await Product.find();
            res.status(200).send(data);
        }catch(e){
            console.log(e);
        }
    },

    async getProductById(req,res){
        const id = req.params.id;
        try{
            const data = await Product.findById(id);
            res.status(200).send(data);
        }catch(e){
            console.log(e);
        }
    },

    async addProduct(req,res){
        const { name, model, categoryId,image, price, description } = req.body;
    
        if(!name || !model || !categoryId || !image || !price || !description){
            res.status(400).json({message: "fill all field"})
        }
        try{
                await Product.create({name, model, categoryId,image, price, description});
                res.status(200).json({message: "Product added"});
        }catch(e){
            console.log(e);
        }
    }
}