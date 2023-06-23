import {
   LOAD_JOB_REQUEST,
   LOAD_JOB_SUCCESS,
   LOAD_JOB_FAILURE,
   LOAD_JOB_RESET,
} from "./jobTypes";

const jobInitialState = {
   loading: false,
   jobs: [],
   error: "",
};
//database connect properly
const JobReducer = (state = jobInitialState, action) => {
   switch (action.type) {
      case LOAD_JOB_REQUEST:
         return {
            loading: true,
         };
      case LOAD_JOB_SUCCESS:
         return {
            loading: false,
            success: action.payload.success,
            page: action.payload.page,
            pages: action.payload.pages,
            count: action.payload.count,
            setUniqueLocation: action.payload.setUniqueLocation,
            jobs: action.payload.jobs,
         };
      case LOAD_JOB_FAILURE:
         return {
            loading: false,
            jobs: [],
            error: action.payload,
         };
      case LOAD_JOB_RESET:
         return {};

      default:
         return state;
   }
};

export default JobReducer;
