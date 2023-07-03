import axios from "axios";
import {
   GOOGLE_LOGIN_FAILURE,
   GOOGLE_LOGIN_REQUEST,
   GOOGLE_LOGIN_SUCCESS,
} from "./constant";
const Url = "http://localhost:5000";

export const googleLoginAction = (userInfo) => async (dispatch) => {
   dispatch({ type: GOOGLE_LOGIN_REQUEST });
   try {
      const response = await axios({
         method: "post",
         url: `${Url}/api/google-login`,
         data: userInfo,
         withCredentials: true,
      });
      const data = response.data;
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log(data);
      dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: data });
   } catch (error) {
      dispatch({
         type: GOOGLE_LOGIN_FAILURE,
         payload: error.response.data.error,
      });
   }
};
