import axios from "axios";
import {
   LOAD_JOB_TYPE_FAILURE,
   LOAD_JOB_TYPE_REQUEST,
   LOAD_JOB_TYPE_RESET,
   LOAD_JOB_TYPE_SUCCESS,
} from "./constant";
const Url = "http://localhost:5000";

export const loadJobTypeRequest = () => {
   return {
      type: LOAD_JOB_TYPE_REQUEST,
   };
};

export const loadJobTypeSuccess = (jobType) => {
   return {
      type: LOAD_JOB_TYPE_SUCCESS,
      payload: jobType,
   };
};
export const loadJobTypeFailure = (error) => {
   return {
      type: LOAD_JOB_TYPE_FAILURE,
      payload: error,
   };
};
export const loadJobTypeReset = () => {
   return {
      type: LOAD_JOB_TYPE_RESET,
   };
};

export const loadJobType = () => async (dispatch) => {
   try {
      dispatch(loadJobTypeRequest());
      const response = await axios({
         method: "get",
         url: `${Url}/api/type/jobs`,
      });
      const jobType = response.data;

      console.log(jobType);
      dispatch(loadJobTypeSuccess(jobType));
   } catch (error) {
      let errMsg = response.data.error;
      dispatch(loadJobTypeFailure(errMsg));
   }
};
