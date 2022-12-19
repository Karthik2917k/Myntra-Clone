import {
  USER_LOGOUT,
  USER_SIGNIN_ERROR,
  USER_SIGNIN_LOADING,
  USER_SIGNIN_SUCCESS,
} from "./user.actionType.js";
let token = JSON.parse(localStorage.getItem("token")) || {};

const initialState = {
  data: token,
  loading: false,
  error: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGNIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_SIGNIN_SUCCESS: {
      localStorage.setItem("token", JSON.stringify(payload));
      return {
        ...state,
        loading: false,
        data: payload,
        error:false
      };
    }
    case USER_SIGNIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem("token");
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
