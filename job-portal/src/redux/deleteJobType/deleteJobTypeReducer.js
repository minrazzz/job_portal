import {
   JOB_TYPE_DELETE_FAILURE,
   JOB_TYPE_DELETE_REQUEST,
   JOB_TYPE_DELETE_RESET,
   JOB_TYPE_DELETE_SUCCESS,
} from "./constant";

const jobTypeDeleteState = {
   loading: true,
   deleteJobType: null,
   error: "",
};

const jobTypeDeleteReducer = (state = jobTypeDeleteState, action) => {
   switch (action.type) {
      case JOB_TYPE_DELETE_REQUEST:
         return { loading: true };
      case JOB_TYPE_DELETE_SUCCESS:
         return { loading: false, deleteJob: action.payload.message };
      case JOB_TYPE_DELETE_FAILURE:
         return { loading: false, error: action.payload };
      case JOB_TYPE_DELETE_RESET:
         return {};

      default:
         return state;
   }
};

export default jobTypeDeleteReducer;
