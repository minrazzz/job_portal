import { combineReducers } from "redux";
import JobReducer from "./job/jobReducer";
import JobTypeReducer from "./jobType/jobTypeReducer";
import loginReducer from "./userLogin/loginReducer";
import userProfileReducer from "./userProfile/userProfileReducer";
import singleJobReducer from "./singleJob/singleJobReducer";
import applyJobReducer from "./applyJob/applyJobReducer";
import allUsersReducer from "./allUsers/allUsersReducer";
import singleUserReducer from "./singleUser/singleUserReducer";
import createJobReducer from "./createJob/createJobReducer";
import createCatReducer from "./createJobType/createCatReducer";

const rootReducers = combineReducers({
   allJobs: JobReducer,
   jobType: JobTypeReducer,
   login: loginReducer,
   profile: userProfileReducer,
   singleJob: singleJobReducer,
   applyJob: applyJobReducer,
   allUsers: allUsersReducer,
   singleUser: singleUserReducer,
   createJob: createJobReducer,
   createCat: createCatReducer,
});

export default rootReducers;
