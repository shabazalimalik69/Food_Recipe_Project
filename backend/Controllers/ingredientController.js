const Ingredient = require("../Models/ingredientModel");

const createIngredient = async(req,res)=>{
    try {
        let ingredients = await Ingredient.create({
            ...req.body,
        });
        ingredients.save();
        return res.status(200).send({ingredientId:ingredients._id})
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getIngredients = async(req,res)=>{
   
   try {
       let ingredients = await Ingredient.find().populate(["creator_id","recipe_id"]);
       return res.status(200).send(ingredients)
   } catch (error) {
       res.status(500).send(error.message)
   }
}

module.exports = {createIngredient,getIngredients}