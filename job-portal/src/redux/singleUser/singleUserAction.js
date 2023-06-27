import axios from "axios";
import {
   SINGLE_USER_LOAD_FAILURE,
   SINGLE_USER_LOAD_REQUEST,
   SINGLE_USER_LOAD_SUCCESS,
} from "./constant";
const Url = "http://localhost:5000";

export const singleUserAction = (id) => async (dispatch) => {
   dispatch({ type: SINGLE_USER_LOAD_REQUEST });
   try {
      const response = await axios({
         method: "get",
         url: `${Url}/api/singleUser/${id}`,
         withCredentials: true,
      });
      const data = response.data;
      dispatch({ type: SINGLE_USER_LOAD_SUCCESS, payload: data });
   } catch (error) {
      dispatch({
         type: SINGLE_USER_LOAD_FAILURE,
         payload: error.response.data.error,
      });
   }
};
