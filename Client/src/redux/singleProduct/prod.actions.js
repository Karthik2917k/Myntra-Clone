import {
  MENS_SINGLE_PRODUCT_SUCCESS,
  MENS_SINGLE_PRODUCT_LOADING,
  MENS_SINGLE_PRODUCT_ERROR,
  MENS_SINGLE_PRODUCT_RESET,
} from "./prod.actionType.js";
import axios from "axios";

export const singleProd = (id) => async (dispatch) => {
  dispatch({ type: MENS_SINGLE_PRODUCT_LOADING });
  try {
    let response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/products/${id}`);
    dispatch({ type: MENS_SINGLE_PRODUCT_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: MENS_SINGLE_PRODUCT_ERROR, payload: e.message });
    console.log(e.message);
  }
};

export const singlereset = () => ({ type: MENS_SINGLE_PRODUCT_RESET });
