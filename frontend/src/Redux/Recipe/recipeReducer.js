import { POST_RECIPE } from "./recipeActionTypes";
let recipeId = localStorage.getItem("recipeId") || "";
const initState = {
  recipeId: recipeId,
};

export const recipeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case POST_RECIPE: {
      //console.log("post",payload)
      localStorage.setItem("recipeId", JSON.stringify(payload.recipeId));
      return {
        ...state,
        recipeId: payload.recipeId,
      };
    }
    default: {
      return state;
    }
  }
};
