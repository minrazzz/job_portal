import {
   USER_SIGNIN_FAIL,
   USER_SIGNIN_REQUEST,
   USER_SIGNIN_RESET,
   USER_SIGNIN_SUCCESS,
} from "./constants";

const storedUserInfo = localStorage.getItem("userInfo")
   ? JSON.parse(localStorage.getItem("userInfo"))
   : null;

const loginInitialState = {
   userInfo: storedUserInfo,
   error: "",
};

const loginReducer = (state = loginInitialState, action) => {
   switch (action.type) {
      case USER_SIGNIN_REQUEST:
         return { loading: true, userInfo: null, isAuthenticated: false };
      case USER_SIGNIN_SUCCESS:
         return {
            loading: false,
            userInfo: action.payload,
            isAuthenticated: true,
         };

      case USER_SIGNIN_FAIL:
         return {
            loading: false,
            error: action.payload,
            userInfo: null,
            isAuthenticated: false,
         };
      case USER_SIGNIN_RESET:
         return {};

      default:
         return state;
   }
};
export default loginReducer;
