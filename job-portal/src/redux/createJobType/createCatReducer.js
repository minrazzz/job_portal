import {
   CREATE_CAT_FAILURE,
   CREATE_CAT_REQUEST,
   CREATE_CAT_RESET,
   CREATE_CAT_SUCCESS,
} from "./constant";

const createCatState = {
   loading: true,
   createCat: null,
   error: "",
};

const createCatReducer = (state = createCatState, action) => {
   switch (action.type) {
      case CREATE_CAT_REQUEST:
         return { loading: true };
      case CREATE_CAT_SUCCESS:
         return { loading: true, createCat: action.payload.jobT };
      case CREATE_CAT_FAILURE:
         return { loading: true, error: action.payload };
      case CREATE_CAT_RESET:
         return {};

      default:
         return state;
   }
};

export default createCatReducer;
