const express = require('express');
const { createIngredient } = require('../Controllers/ingredientController');
const { createRecipe} = require('../Controllers/recipeController');
const { createSteps, getData, getDetails } = require('../Controllers/stepController');
const { signUp, signIn } = require('../Controllers/userController');
const authMiddleware = require("../Middlewares/authMiddleware")

const Router = express.Router();


Router.post('/signup',signUp);
Router.post('/signin',signIn);

Router.post('/createRecipe',authMiddleware,createRecipe);
Router.post('/createIngredient',authMiddleware,createIngredient);
Router.post('/createSteps',authMiddleware,createSteps);
Router.get('/getData',authMiddleware,getData);
Router.get('/getDetails/:id',getDetails);


module.exports = Router;