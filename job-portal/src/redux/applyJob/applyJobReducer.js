import {
   USER_APPLY_JOB_FAIL,
   USER_APPLY_JOB_REQUEST,
   USER_APPLY_JOB_RESET,
   USER_APPLY_JOB_SUCCESS,
} from "./constant";

const applyJobInitialState = {
   loading: true,
   userJob: null,
   error: "",
};

const applyJobReducer = (state = applyJobInitialState, action) => {
   switch (action.type) {
      case USER_APPLY_JOB_REQUEST:
         return { loading: true };
      case USER_APPLY_JOB_SUCCESS:
         return { loading: false, userJob: action.payload.currentUser };
      case USER_APPLY_JOB_FAIL:
         return { loading: false, error: action.payload };
      case USER_APPLY_JOB_RESET:
         return {};

      default:
         return state;
   }
};

export default applyJobReducer;
