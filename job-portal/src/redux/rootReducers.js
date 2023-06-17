import { combineReducers } from "redux";
import JobReducer from "./job/jobReducer";
import JobTypeReducer from "./jobType/jobTypeReducer";

const rootReducers = combineReducers({
   allJobs: JobReducer,
   jobType: JobTypeReducer,
});

export default rootReducers;
