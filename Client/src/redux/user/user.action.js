import axios from "axios";
import {
  USER_LOGOUT,
  USER_SIGNIN_ERROR,
  USER_SIGNIN_LOADING,
  USER_SIGNIN_SUCCESS,
} from "./user.actionType.js";

export const usersignin = (creds) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_LOADING });
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_LOCAL_URL}/user/signin`,
      creds
    );
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: USER_SIGNIN_ERROR });
    console.log(err);
  }
};

export const userReset = () => ({ type: USER_LOGOUT });
