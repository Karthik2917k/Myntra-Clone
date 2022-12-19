import {
  MENS_ERROR,
  MENS_LOADING,
  MENS_SUCCESS,
  MENS_RESET,
} from "./mens.actionType.js";
import axios from "axios";

//Blazers -GET

export const mens = (str) => async (dispatch) => {
  dispatch({ type: MENS_LOADING });
  try {
    if(str){
      
      let response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/products${str}&page=1&limit=40`

      );
      dispatch({ type: MENS_SUCCESS, payload: response.data });
    }
    else{
      let response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/products?page=1&limit=40`
      );
      dispatch({ type: MENS_SUCCESS, payload: response.data });
    }
    
  } catch (e) {
    dispatch({ type: MENS_ERROR, payload: e.message });
    console.log(e.message);
  }
};
//Blazers -DEL
export const blazersreset = () => ({ type: MENS_RESET });
