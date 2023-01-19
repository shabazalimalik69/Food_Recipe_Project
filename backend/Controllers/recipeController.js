const Recipe = require("../Models/recipeModel");

const createRecipe = async(req,res)=>{
    const {id} = req.body;
    try {
        let recipes = await Recipe.create({
            ...req.body,id
        });
        recipes.save();
        return res.status(200).send({recipeId:recipes._id})
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {createRecipe}