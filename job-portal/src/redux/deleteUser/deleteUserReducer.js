import {
   USER_DELETE_FAILURE,
   USER_DELETE_REQUEST,
   USER_DELETE_RESET,
   USER_DELETE_SUCCESS,
} from "./constant";

const userDeleteState = {
   loading: true,
   deleteUser: null,
   error: "",
};

const userDeleteReducer = (state = userDeleteState, action) => {
   switch (action.type) {
      case USER_DELETE_REQUEST:
         return { loading: true };
      case USER_DELETE_SUCCESS:
         return { loading: false, deleteUser: action.payload.message };
      case USER_DELETE_FAILURE:
         return { loading: false, error: action.payload };
      case USER_DELETE_RESET:
         return {};

      default:
         return state;
   }
};

export default userDeleteReducer;
