import {
   USER_LOGOUT_FAIL,
   USER_LOGOUT_REQUEST,
   USER_LOGOUT_RESET,
   USER_LOGOUT_SUCCESS,
} from "./logoutConstants";

const logoutInitialState = {
   loading: false,
   user: {},
   error: "",
};

const logoutReducer = (state = logoutInitialState, action) => {
   switch (action.type) {
      case USER_LOGOUT_REQUEST:
         return {
            loading: true,
         };
      case USER_LOGOUT_SUCCESS:
         return {
            loading: false,
            user: action.payload,
         };
      case USER_LOGOUT_FAIL:
         return {
            loading: false,
            error: action.payload,
         };
      case USER_LOGOUT_RESET:
         return {};

      default:
         return state;
   }
};

export default logoutReducer;
