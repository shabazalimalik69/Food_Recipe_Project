import { GET_DATA, POST_STEPS } from "./stepActionTypes";

const initState = {
  data: [],
};

export const stepsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case POST_STEPS: {
      return {
        ...state,
      };
    }
    case GET_DATA: {
      //console.log("get",payload)
      return {
        ...state,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
