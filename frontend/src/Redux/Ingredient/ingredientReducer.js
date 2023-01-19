import { POST_INGREDIENT } from "./ingredientActionTypes";

let ingredientId = localStorage.getItem("ingredientId") || "";
const initState = {
  ingredientId: ingredientId,
};

export const ingredientReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case POST_INGREDIENT: {
      localStorage.setItem(
        "ingredientId",
        JSON.stringify(payload.ingredientId)
      );
      return {
        ...state,
        ingredientId: payload.ingredientId,
      };
    }
    default: {
      return state;
    }
  }
};
