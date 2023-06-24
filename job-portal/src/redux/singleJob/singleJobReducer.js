import {
   JOB_LOAD_SINGLE_FAIL,
   JOB_LOAD_SINGLE_REQUEST,
   JOB_LOAD_SINGLE_RESET,
   JOB_LOAD_SINGLE_SUCCESS,
} from "./singleJobConstant";

const singleJobInitialState = {
   loading: false,
   singleJob: null,
   success: null,
   error: "",
};

const singleJobReducer = (state = singleJobInitialState, action) => {
   switch (action.type) {
      case JOB_LOAD_SINGLE_REQUEST:
         return { loading: true };
      case JOB_LOAD_SINGLE_SUCCESS:
         return {
            loading: false,
            singleJob: action.payload.job,
            success: action.payload.success,
         };
      case JOB_LOAD_SINGLE_FAIL:
         return {
            loading: false,
            singleJob: null,
            success: action.payload,
         };
      case JOB_LOAD_SINGLE_RESET:
         return {};

      default:
         return state;
   }
};

export default singleJobReducer;
