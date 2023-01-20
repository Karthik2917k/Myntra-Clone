import {
  MENS_ERROR,
  MENS_LOADING,
  MENS_RESET,
  MENS_SUCCESS,
} from "./mens.actionType.js";
const initialState = {
  loading: false,
  data: [],
  error: false,
  length: 0,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //MENS-LOADING

    case MENS_LOADING: {
      return { ...state, loading: true };
    }
    //MENS-SUCCESS
    case MENS_SUCCESS: {
      return {
        ...state,

        data: payload.data,
        length: payload.length,
        loading: false,
      };
    }
    //MENS-ERROR
    case MENS_ERROR: {
      return { ...state, loading: false, error: true, length: 0 };
    }
    //MENS-RESET
    case MENS_RESET: {
      return {
        ...state,
        data: [],
        loading: false,
        error: false,
        length: 0,
      };
    }

    default:
      return state;
  }
};
