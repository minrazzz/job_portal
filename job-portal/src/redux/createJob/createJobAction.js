import axios from "axios";
import {
   CREATE_JOB_FAILURE,
   CREATE_JOB_REQUEST,
   CREATE_JOB_SUCCESS,
} from "./constant";
const Url = "http://localhost:5000";

export const createJobAction = (jobDetails) => async (dispatch) => {
   dispatch({ type: CREATE_JOB_REQUEST });
   try {
      const response = await axios({
         method: "post",
         url: `${Url}/api/add/jobs`,
         data: jobDetails,
         withCredentials: true,
      });
      const data = response.data;
      dispatch({ type: CREATE_JOB_SUCCESS, payload: data });
   } catch (error) {
      dispatch({
         type: CREATE_JOB_FAILURE,
         payload: error.response.data.error,
      });
   }
};
