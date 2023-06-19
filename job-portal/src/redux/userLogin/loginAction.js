import axios from "axios";
import {
   USER_SIGNIN_FAIL,
   USER_SIGNIN_REQUEST,
   USER_SIGNIN_SUCCESS,
} from "./constants";

export const userSignIn = async (user) => async (dispatch) => {
   dispatch({ type: USER_SIGNIN_REQUEST });
   try {
      const data = await axios({
         method: "post",
         url: `/api/login`,
         data: user,
      });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
   } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
   }
};
