import axios from "axios";
import {
   USER_LOAD_FAIL,
   USER_LOAD_REQUEST,
   USER_LOAD_SUCCESS,
} from "./userProfileConstant";
const Url = "http://localhost:5000";

export const userProfileAction = () => async (dispatch) => {
   dispatch({ type: USER_LOAD_REQUEST });
   try {
      const response = await axios({
         method: "get",
         url: `${Url}/api/profile`,
         withCredentials: true,
      });
      const data = response.data;
      dispatch({ type: USER_LOAD_SUCCESS, payload: data });
   } catch (error) {
      dispatch({ type: USER_LOAD_FAIL, payload: error.response.data.error });
   }
};
