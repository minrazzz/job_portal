import { combineReducers } from "redux";
import JobReducer from "./job/jobReducer";
import JobTypeReducer from "./jobType/jobTypeReducer";
import loginReducer from "./userLogin/loginReducer";

const rootReducers = combineReducers({
   allJobs: JobReducer,
   jobType: JobTypeReducer,
   login: loginReducer,
});

export default rootReducers;
