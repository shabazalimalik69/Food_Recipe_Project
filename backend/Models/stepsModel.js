












const mongoose = require("mongoose");

const stepsSchema = new mongoose.Schema({
id:{type:String},
creator_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
},    
recipe_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"recipe",
    required:true
},
ingredient_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"ingredient",
    required:true
},
steps:{type:Array,required:true},
},{timestamps:true});

const Step = mongoose.model('step', stepsSchema);

module.exports = Step;