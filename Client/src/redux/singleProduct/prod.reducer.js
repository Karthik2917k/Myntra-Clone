import {
  MENS_SINGLE_PRODUCT_ERROR,
  MENS_SINGLE_PRODUCT_LOADING,
  MENS_SINGLE_PRODUCT_RESET,
  MENS_SINGLE_PRODUCT_SUCCESS,
} from "./prod.actionType.js";
const initialState = {
  loading: false,
  data: {},
  error: false,
};
export const singleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //SINGLE-USER-LOADING
    case MENS_SINGLE_PRODUCT_LOADING: {
      return { ...state, loading: true };
    }
    //SINGLE-USER-SUCCESS
    case MENS_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,

        data: payload,
        loading: false,
        error: false,
      };
    }
    //SINGLE-USER-ERROR
    case MENS_SINGLE_PRODUCT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    //SINGLE-USER-RESET
    case MENS_SINGLE_PRODUCT_RESET: {
      return {
        ...state,
        data: {},
        loading: false,
        error: false,
      };
    }
    default:
      return state;
  }
};
