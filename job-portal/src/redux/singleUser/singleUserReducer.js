import {
   SINGLE_USER_LOAD_FAILURE,
   SINGLE_USER_LOAD_REQUEST,
   SINGLE_USER_LOAD_RESET,
   SINGLE_USER_LOAD_SUCCESS,
} from "./constant";

const singleUserState = {
   loading: true,
   singleUserInfo: null,
   error: "",
};

const singleUserReducer = (state = singleUserState, action) => {
   switch (action.type) {
      case SINGLE_USER_LOAD_REQUEST:
         return { loading: true };
      case SINGLE_USER_LOAD_SUCCESS:
         return { loading: true, singleUserInfo: action.payload.user };
      case SINGLE_USER_LOAD_FAILURE:
         return { loading: true, singleUserInfo: null, error: action.payload };
      case SINGLE_USER_LOAD_RESET:
         return {};

      default:
         return state;
   }
};

export default singleUserReducer;
