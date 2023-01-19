import {combineReducers,legacy_createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import { ingredientReducer } from "./Ingredient/ingredientReducer";
import { recipeReducer } from "./Recipe/recipeReducer";
import { stepsReducer } from "./Steps/stepReducer";
import { authReducer } from "./User/userReducer";


const rootReducer = combineReducers({
    auth:authReducer,
    recipe:recipeReducer,
    ingredient:ingredientReducer,
    steps:stepsReducer
});

const create_compose =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer,create_compose(applyMiddleware(thunk)))