import axios from "axios";
import {
   LOAD_JOB_FAILURE,
   LOAD_JOB_REQUEST,
   LOAD_JOB_RESET,
   LOAD_JOB_SUCCESS,
} from "./jobTypes";

const Url = "http://localhost:5000";

export const loadJobRequest = () => {
   return {
      type: LOAD_JOB_REQUEST,
   };
};

export const loadJobSuccess = (jobs) => {
   return {
      type: LOAD_JOB_SUCCESS,
      payload: jobs,
   };
};
export const loadJobFailure = (error) => {
   return {
      type: LOAD_JOB_FAILURE,
      payload: error.response.data.error,
   };
};
export const loadJobReset = () => {
   return {
      type: LOAD_JOB_RESET,
   };
};

export const loadJobs =
   (pageNumber, keyword = "", cat = "", location = "") =>
   async (dispatch) => {
      try {
         dispatch(loadJobRequest());
         const response = await axios({
            method: "get",
            url: `${Url}/api/get/all-jobs?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`,
         });
         const jobs = response.data;

         console.log(jobs);
         dispatch(loadJobSuccess(jobs));
      } catch (error) {
         let errorMsg = error.response.data.error;
         dispatch(loadJobFailure(errorMsg));
      }
   };
