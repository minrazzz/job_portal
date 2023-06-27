import {
   EDIT_USER_FAILURE,
   EDIT_USER_REQUEST,
   EDIT_USER_RESET,
   EDIT_USER_SUCCESS,
} from "./constant";

const editReducerState = {
   loading: true,
   editUserInfo: null,
   error: "",
};
const editUserReducer = (state = editReducerState, action) => {
   switch (action.type) {
      case EDIT_USER_REQUEST:
         return { loading: true };
      case EDIT_USER_SUCCESS:
         return { loading: true, editUserInfo: action.payload.user };
      case EDIT_USER_FAILURE:
         return { loading: true, error: action.payload };
      case EDIT_USER_RESET:
         return {};

      default:
         return state;
   }
};

export default editUserReducer;
