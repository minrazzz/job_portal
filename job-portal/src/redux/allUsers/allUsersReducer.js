import {
   ALL_USER_LOAD_FAIL,
   ALL_USER_LOAD_REQUEST,
   ALL_USER_LOAD_RESET,
   ALL_USER_LOAD_SUCCESS,
} from "./constant";

const allUsersInitialState = {
   loading: true,
   allUsers: null,
   error: "",
};

const allUsersReducer = (state = allUsersInitialState, action) => {
   switch (action.type) {
      case ALL_USER_LOAD_REQUEST:
         return {
            loading: true,
         };
      case ALL_USER_LOAD_SUCCESS:
         return {
            loading: false,
            allUsers: action.payload.users,
         };
      case ALL_USER_LOAD_FAIL:
         return {
            loading: false,
            error: action.payload,
         };

      case ALL_USER_LOAD_RESET:
         return {};

      default:
         return state;
   }
};
export default allUsersReducer;
