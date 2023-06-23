import {
   USER_LOAD_FAIL,
   USER_LOAD_REQUEST,
   USER_LOAD_RESET,
   USER_LOAD_SUCCESS,
} from "./userProfileConstant";

const userProfileInitialState = {
   loading: false,
   user: null,
   error: "",
};

const userProfileReducer = (state = userProfileInitialState, action) => {
   switch (action.type) {
      case USER_LOAD_REQUEST:
         return { loading: false, user: null };
      case USER_LOAD_SUCCESS:
         return {
            loading: true,
            user: action.payload.user,
         };
      case USER_LOAD_FAIL:
         return {
            loading: false,
            user: null,
         };
      case USER_LOAD_RESET:
         return {};

      default:
         return state;
   }
};
export default userProfileReducer;
