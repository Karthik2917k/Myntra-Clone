import axios from "axios";
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
  DECREASE_PROD_FROM_CART_ERROR,
  DECREASE_PROD_FROM_CART_lOADING,
  DECREASE_PROD_FROM_CART_SUCCESS,
  ORDER_ERROR,
  ORDER_lOADING,
  ORDER_SUCCESS,
} from "./cart.actionType.js";

export const cartproducts = (auth) => async (dispatch) => {
  dispatch({ type: CART_LOADING });
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/cart/products`,
      {
        headers: { token: auth },
      }
    );
    dispatch({ type: CART_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: CART_ERROR });
  }
};

export const addtocart = (inf) => async (dispatch) => {
  dispatch({ type: ADD_TO_CART_lOADING });
  try {
    let response = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/cart`, inf.inf, {
      headers: { token: inf.token },
    });
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: response.data });
    dispatch(cartproducts(inf.token));
  } catch (e) {
    dispatch({ type: ADD_TO_CART_ERROR, payload: e.response.data });
  }
};
export const cartproddecrease = (inf) => async (dispatch) => {
  dispatch({ type: DECREASE_PROD_FROM_CART_lOADING });
  try {
    let response = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/cart/decrese`, inf.inf, {
      headers: { token: inf.token },
    });
    dispatch({ type: DECREASE_PROD_FROM_CART_SUCCESS, payload: response.data });
    dispatch(cartproducts(inf.token));
  } catch (e) {
    dispatch({ type: DECREASE_PROD_FROM_CART_ERROR, payload: e.response.data });
  }
};


export const orderplacing = (email) =>async (dispatch) =>{
  dispatch({ type: ORDER_lOADING });
  try {
    let response = await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/cart/placeorder`, {
      headers: { token: email },
    });
    dispatch({ type: ORDER_SUCCESS, payload: response.data });
    dispatch(cartproducts(email));
  } catch (e) {
    dispatch({ type: ORDER_ERROR, payload: e.response.data });
  }
}

export const deletecart = (id,email) => async (dispatch) => {
  console.log(id);
  dispatch({ type: CART_ITEM_REMOVING_lOADING });
  try {
    let response = await axios.delete(`${process.env.REACT_APP_LOCAL_URL}/cart/${id}`);
    dispatch({ type: CART_ITEM_REMOVING_SUCCESS, payload: response.data });
    dispatch(cartproducts(email));
  } catch (e) {
    dispatch({ type: CART_ITEM_REMOVING_ERROR });
  }
};

export const cartReset = () => ({ type: ADD_TO_CART_RESET });
