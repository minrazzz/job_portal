import { combineReducers } from "redux";
import JobReducer from "./job/jobReducer";
import JobTypeReducer from "./jobType/jobTypeReducer";
import loginReducer from "./userLogin/loginReducer";
import userProfileReducer from "./userProfile/userProfileReducer";
import singleJobReducer from "./singleJob/singleJobReducer";

const rootReducers = combineReducers({
   allJobs: JobReducer,
   jobType: JobTypeReducer,
   login: loginReducer,
   profile: userProfileReducer,
   singleJob: singleJobReducer,
});

export default rootReducers;
