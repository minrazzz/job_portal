import {
   CREATE_JOB_FAILURE,
   CREATE_JOB_REQUEST,
   CREATE_JOB_RESET,
   CREATE_JOB_SUCCESS,
} from "./constant";

const createJobState = {
   loading: true,
   createJob: null,
   error: "",
};

const createJobReducer = (state = createJobState, action) => {
   switch (action.type) {
      case CREATE_JOB_REQUEST:
         return { loading: true };
      case CREATE_JOB_SUCCESS:
         return { loading: true, createJob: action.payload.job };
      case CREATE_JOB_FAILURE:
         return { loading: true, error: action.payload.job };
      case CREATE_JOB_RESET:
         return {};

      default:
         return state;
   }
};

export default createJobReducer;
