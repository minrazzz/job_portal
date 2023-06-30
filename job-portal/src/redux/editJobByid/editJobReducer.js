import {
   EDIT_JOB_FAILURE,
   EDIT_JOB_REQUEST,
   EDIT_JOB_SUCCESS,
} from "./constant";

const editJobState = {
   loading: true,
   editJob: null,
   error: "",
};

const editJobReducer = (state = editJobState, action) => {
   switch (action.type) {
      case EDIT_JOB_REQUEST:
         return { loading: true };
      case EDIT_JOB_SUCCESS:
         return { loading: false, editJob: action.payload.job };
      case EDIT_JOB_FAILURE:
         return { loading: false, error: action.payload };

      default:
         return state;
   }
};
export default editJobReducer;
