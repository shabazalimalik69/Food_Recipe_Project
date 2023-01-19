const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
recipe_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"recipe",
    required:true
},
items:{type:Array,required:true},
amount:{type:Number,required:true},
unit:{type:String,required:true},
},{timestamps:true});

const Ingredient = mongoose.model('ingredient', ingredientSchema);

module.exports = Ingredient;