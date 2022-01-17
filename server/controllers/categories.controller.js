const Categories = require("../model/categories");

module.exports = {
    async getCategory(req,res){
        try{
            const data = await Categories.find();
            res.status(200).send(data);
        }catch(e){
            console.log(e);
        }
    },

    async addCategory(req,res){
        const {name} = req.body;
        try{
            await Categories.create({name});
            res.status(200).json({message: "Categories added"})
        }catch(e){
            console.log(e);
        }
    }
}