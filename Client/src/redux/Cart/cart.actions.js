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
  } catch (e) {
    dispatch({ type: ADD_TO_CART_ERROR, payload: e.response.data });
  }
};

export const deleteCart = (body) => async (dispatch) => {
  console.log(body);
  dispatch({ type: CART_ITEM_REMOVING_lOADING });
  try {
    let response = await axios.delete("https://myntra.cyclic.app/cart", body);
    dispatch({ type: CART_ITEM_REMOVING_SUCCESS, payload: response.data });
    console.log("Product deleted successfully");
  } catch (e) {
    dispatch({ type: CART_ITEM_REMOVING_ERROR });
  }
};

export const cartReset = () => ({ type: ADD_TO_CART_RESET });
