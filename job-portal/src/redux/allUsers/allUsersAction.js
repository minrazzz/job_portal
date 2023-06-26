import axios from "axios";
import { ALL_USER_LOAD_REQUEST, ALL_USER_LOAD_SUCCESS } from "./constant";
import { ALL_USER_LOAD_FAIL } from "./constant";
const Url = "http://localhost:5000";

export const allUsersAction = () => async (dispatch) => {
   dispatch({ type: ALL_USER_LOAD_REQUEST });
   try {
      const response = await axios({
         method: "get",
         url: `${Url}/api/allUsers`,
         withCredentials: true,
      });
      const data = response.data;
      dispatch({ type: ALL_USER_LOAD_SUCCESS, payload: data });
   } catch (error) {
      dispatch({
         type: ALL_USER_LOAD_FAIL,
         payload: error.response.data.error,
      });
   }
};
