import axios from "axios";
import { POST_RECIPE } from "./recipeActionTypes";

export const postRecipeAPI =
  ({ token, recipeData }) =>
  async (dispatch) => {
    try {
      const res = await axios.post(
        "https://food-recipe-bwzg.onrender.com/createRecipe",
        recipeData,
        { headers: { token: token } }
      );
      //console.log(res)
      dispatch({ type: POST_RECIPE, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
