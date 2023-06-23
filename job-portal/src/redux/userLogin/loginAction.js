import axios from "axios";
import {
   USER_SIGNIN_FAIL,
   USER_SIGNIN_REQUEST,
   USER_SIGNIN_SUCCESS,
} from "./constants";

const Url = "http://localhost:5000";

export function loginAction(user) {
   return async function (dispatch) {
      dispatch({ type: USER_SIGNIN_REQUEST });
      try {
         const response = await axios({
            method: "post",
            url: `${Url}/api/login`,
            data: user,
            withCredentials: true,
         });
         const data = response.data;
         localStorage.setItem("userInfo", JSON.stringify(data));
         console.log(data);

         dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data,
         });
      } catch (error) {
         console.log(error);
         dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error,
         });
      }
   };
}
