import {
   JOB_DELETE_FAILURE,
   JOB_DELETE_REQUEST,
   JOB_DELETE_RESET,
   JOB_DELETE_SUCCESS,
} from "./constant";

const jobDeleteState = {
   loading: true,
   deleteJob: null,
   error: "",
};

const jobDeleteReducer = (state = jobDeleteState, action) => {
   switch (action.type) {
      case JOB_DELETE_REQUEST:
         return { loading: true };
      case JOB_DELETE_SUCCESS:
         return { loading: false, deleteJob: action.payload.message };
      case JOB_DELETE_FAILURE:
         return { loading: false, error: action.payload };
      case JOB_DELETE_RESET:
         return {};

      default:
         return state;
   }
};

export default jobDeleteReducer;
