import {
  ADD_TO_CART_ERROR,
  ADD_TO_CART_lOADING,
  ADD_TO_CART_RESET,
  ADD_TO_CART_SUCCESS,
  CART_ERROR,
  CART_ITEM_REMOVING_ERROR,
  CART_ITEM_REMOVING_lOADING,
  CART_ITEM_REMOVING_SUCCESS,
  CART_LOADING,
  CART_SUCCESS,
} from "./cart.actionType.js";

const initialState = {
  data: [],
  msg:"",
  loading: false,
  error: false,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_LOADING: {
      return { ...state, loading: true };
    }
    case CART_SUCCESS: {
      return { ...state, loading: false,error:false, data: payload };
    }
    case CART_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case ADD_TO_CART_lOADING: {
      return { ...state, loading: true };
    }
    case ADD_TO_CART_SUCCESS: {
      return { ...state, loading: false, error:false,msg: payload};
    }
    case ADD_TO_CART_ERROR: {
      return { ...state, loading: false, error: true,msg:payload };
    }
    case ADD_TO_CART_RESET:{
      return {...state, loading: false, error:false,msg:""}
    }
    case CART_ITEM_REMOVING_lOADING:{
      return { ...state, loading: true };
    }
    case CART_ITEM_REMOVING_SUCCESS:{
      return {...state,loading:false}
    }
    case CART_ITEM_REMOVING_ERROR:{
      return {...state,loading:false,error:true}
    }
    default:
      return state;
  }
};
