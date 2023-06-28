import axios from "axios";
import {
   CREATE_CAT_FAILURE,
   CREATE_CAT_REQUEST,
   CREATE_CAT_SUCCESS,
} from "./constant";
const Url = "http://localhost:5000";

export const createCatAction = (NameInfo) => async (dispatch) => {
   dispatch({ type: CREATE_CAT_REQUEST });
   try {
      const response = await axios({
         method: "post",
         url: `${Url}/api/type/create`,
         data: NameInfo,
         withCredentials: true,
      });
      const data = response.data;
      dispatch({ type: CREATE_CAT_SUCCESS, payload: data });
   } catch (error) {
      dispatch({
         type: CREATE_CAT_FAILURE,
         payload: error.response.data.error,
      });
   }
};
