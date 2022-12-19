import {
  MENS_ERROR,
  MENS_LOADING,
  MENS_RESET,

  MENS_SUCCESS,

} from "./mens.actionType.js";
const initialState = {
  product: {
    loading: false,
    data: [],
    error: false,
  },
};

export const mensReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //MENS-LOADING

    case MENS_LOADING: {
      return { ...state, product: { loading: true } };
    }
    //MENS-SUCCESS
    case MENS_SUCCESS: {
      return {
        ...state,

        product: { data: payload, loading: false },
      };
    }
    //MENS-ERROR
    case MENS_ERROR: {
      return { ...state, product: { loading: false, error: true } };
    }
    //MENS-RESET
    case MENS_RESET: {
      return {
        ...state,
        product: { data: [], loading: false, error: false },
      };
    }

    

    default:
      return state;
  }
};
