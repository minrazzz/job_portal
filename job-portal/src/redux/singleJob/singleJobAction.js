import axios from "axios";
import {
   JOB_LOAD_SINGLE_FAIL,
   JOB_LOAD_SINGLE_REQUEST,
   JOB_LOAD_SINGLE_SUCCESS,
} from "./singleJobConstant";
const Url = "http://localhost:5000";

export const singleJobAction = (id) => async (dispatch) => {
   dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
   try {
      const response = await axios({
         method: "get",
         url: `${Url}/api/get/single-job/${id}`,
         withCredentials: true,
      });
      const data = response.data;
      dispatch({ type: JOB_LOAD_SINGLE_SUCCESS, payload: data });
   } catch (error) {
      dispatch({
         type: JOB_LOAD_SINGLE_FAIL,
         payload: error.response.data.error,
      });
   }
};
