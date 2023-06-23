import {
   LOAD_JOB_TYPE_FAILURE,
   LOAD_JOB_TYPE_REQUEST,
   LOAD_JOB_TYPE_RESET,
   LOAD_JOB_TYPE_SUCCESS,
} from "./constant";

const jobTypeInitialState = {
   loading: false,
   jobType: [],
   error: "",
};
//database connect properly
const JobTypeReducer = (state = jobTypeInitialState, action) => {
   switch (action.type) {
      case LOAD_JOB_TYPE_REQUEST:
         return {
            loading: true,
         };
      case LOAD_JOB_TYPE_SUCCESS:
         return {
            loading: false,
            jobType: action.payload.jobT,
            error: "",
         };
      case LOAD_JOB_TYPE_FAILURE:
         return {
            loading: false,
            jobType: [],
            error: action.payload,
         };
      case LOAD_JOB_TYPE_RESET:
         return {};

      default:
         return state;
   }
};

export default JobTypeReducer;
