import axios from "axios";
import {
   USER_APPLY_JOB_FAIL,
   USER_APPLY_JOB_REQUEST,
   USER_APPLY_JOB_SUCCESS,
} from "./constant";

const Url = "http://localhost:5000";

export const applyJobAction = (job) => async (dispatch) => {
   dispatch({ type: USER_APPLY_JOB_REQUEST });
   try {
      const response = await axios({
         method: "post",
         url: `${Url}/api/user/jobhistory`,
         data: job,
         withCredentials: true,
      });
      const data = response.data;
      console.log(data);
      dispatch({ type: USER_APPLY_JOB_SUCCESS, payload: data });
   } catch (error) {
      dispatch({
         type: USER_APPLY_JOB_FAIL,
         payload: error.response.data.error,
      });
   }
};
