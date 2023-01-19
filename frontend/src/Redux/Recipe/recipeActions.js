import axios from "axios";
import { GET_RECIPE, POST_RECIPE } from "./recipeActionTypes";

export const postRecipeAPI =
  ({ token, recipeData }) =>
  async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:7600/createRecipe",
        recipeData,
        { headers: { token: token } }
      );
      //console.log(res)
      dispatch({ type: POST_RECIPE, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

export const getRecipeAPI = (token) => async (dispatch) => {
  //console.log(token)
  try {
    const res = await axios.get("http://localhost:7600/getData", {
      headers: { token: token },
    });
    //console.log(res.data)
    dispatch({ type: GET_RECIPE, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
