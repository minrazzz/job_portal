import {
   USER_SIGNIN_FAIL,
   USER_SIGNIN_REQUEST,
   USER_SIGNIN_RESET,
   USER_SIGNIN_SUCCESS,
} from "./constants";

const initialState = {
   loading: false,
   userInfo: [],
   isAuthenticated: false,
   error: "",
};

const loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case USER_SIGNIN_REQUEST:
         return { loading: true, isAuthenticated: false };
      case USER_SIGNIN_SUCCESS:
         return {
            loading: false,
            userInfo: action.payload,
            isAuthenticated: true,
         };
      case USER_SIGNIN_FAIL:
         return {
            loading: false,
            isAuthenticated: false,
            error: action.payload,
         };
      case USER_SIGNIN_RESET:
         return {};

      default:
         return state;
   }
};
export default loginReducer;
