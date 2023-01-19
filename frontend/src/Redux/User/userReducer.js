import {
  USER_SIGNIN_ERROR,
  USER_SIGNIN_LOADING,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESS,
} from "./userActionTypes";

const token = localStorage.getItem("token") || "";
const userId = localStorage.getItem("userId") || "";
const initState = {
  token: token,
  userId: userId,
  loading: false,
  error: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case USER_SIGNUP_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case USER_SIGNIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case USER_SIGNIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case USER_SIGNIN_SUCCESS: {
      //console.log(payload.accessToken)
      localStorage.setItem("token", payload.accessToken);
      localStorage.setItem("userId", payload.userId);
      return {
        ...state,
        loading: false,
        error: false,
        token: payload.accessToken,
        userId: payload.userId,
      };
    }
    case USER_SIGNOUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("recipeId");
      localStorage.removeItem("ingredientId");
      return {
        ...state,
        token: "",
        userId: "",
      };
    }
    default: {
      return state;
    }
  }
};
