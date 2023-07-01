import {
   USER_REG_FAILURE,
   USER_REG_REQUEST,
   USER_REG_RESET,
   USER_REG_SUCCESS,
} from "./constant";

const userRegState = {
   loading: "true",
   regUser: [],
   error: "",
};

const userRegReducer = (state = userRegState, action) => {
   switch (action.type) {
      case USER_REG_REQUEST:
         return { loading: true };
      case USER_REG_SUCCESS:
         return { loading: false, regUser: action.payload.user };
      case USER_REG_FAILURE:
         return { loading: false, error: action.payload };
      case USER_REG_RESET:
         return {};

      default:
         return state;
   }
};

export default userRegReducer;
