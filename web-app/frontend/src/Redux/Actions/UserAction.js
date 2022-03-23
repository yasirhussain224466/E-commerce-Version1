import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  CLEAR_ERRORS,
} from "../Constants/UserConstant";
import serverSetting from "../../serverSetting";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(
      `${serverSetting.server_base_url}/api/v1/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": `application/json`,
        },
      }
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response,
    });
  }
};

export const signUp =
  (name, email, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: SIGNUP_REQUEST });
      const { data } = await axios.post(
        `${serverSetting.server_base_url}/api/v1/user/signup`,
        { name, email, password, confirmPassword },
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      );
      dispatch({ type: SIGNUP_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error.response,
      });
    }
  };

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
