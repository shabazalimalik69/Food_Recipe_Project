const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    id: { type: String },
    creator_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    recipe_name: { type: String, required: true },
    desc: { type: String, required: true },
    //image: { type: String, required: true },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("recipe", recipeSchema);

module.exports = Recipe;
