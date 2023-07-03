import {
   GOOGLE_LOGIN_FAILURE,
   GOOGLE_LOGIN_REQUEST,
   GOOGLE_LOGIN_RESET,
   GOOGLE_LOGIN_SUCCESS,
} from "./constant";

const storedUserInfo = localStorage.getItem("userInfo")
   ? JSON.parse(localStorage.getItem("userInfo"))
   : null;

const googleLoginState = {
   loading: true,
   authenticated: false,
   gUser: storedUserInfo,
   errors: null,
};

const googleLoginReducer = (state = googleLoginState, action) => {
   switch (action.type) {
      case GOOGLE_LOGIN_REQUEST:
         return { loading: true };
      case GOOGLE_LOGIN_SUCCESS:
         return { loading: false, gUSer: action.payload, authenticated: true };
      case GOOGLE_LOGIN_FAILURE:
         return { loading: false, errors: action.payload };
      case GOOGLE_LOGIN_RESET:
         return {};

      default:
         return state;
   }
};

export default googleLoginReducer;
