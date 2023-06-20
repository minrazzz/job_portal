import axios from "axios";
import {
   USER_SIGNIN_FAIL,
   USER_SIGNIN_REQUEST,
   USER_SIGNIN_SUCCESS,
} from "./constants";
import { toast } from "react-toastify";
const Url = "http://localhost:5000";

export const loginAction = (user) => async (dispatch) => {
   dispatch({ type: USER_SIGNIN_REQUEST });
   try {
      const response = await axios({
         method: "post",
         url: `${Url}/api/login`,
         data: user,
         withCredentials: true,
      });
      const data = response.data;
      toast.success("Login Successfully !!");
      console.log("loginAction");
      dispatch({
         type: USER_SIGNIN_SUCCESS,
         payload: data,
         isAuthenticated: true,
      });
   } catch (error) {
      dispatch({
         type: USER_SIGNIN_FAIL,
         payload: error.response,
         isAuthenticated: false,
      });
      toast.error("invalid credentials");
   }
};
