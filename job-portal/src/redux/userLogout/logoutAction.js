import axios from "axios";
import { USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS } from "./logoutConstants";
const Url = "http://localhost:5000";

export const logoutAction = () => async (dispatch) => {
   dispatch({ type: USER_LOGOUT_REQUEST });
   try {
      const response = await axios({
         method: "get",
         url: `${Url}/api/logout`,
      });
      const data = response.data;
      dispatch({
         type: USER_LOGOUT_SUCCESS,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: USER_LOGOUT_FAIL,
         payload: error.response.data.error,
      });
   }
};
