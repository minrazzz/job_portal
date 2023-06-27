import axios from "axios";
import { EDIT_USER_REQUEST } from "./constant";
const Url = "http://localhost:5000";

export const editUserAction = (id, user) => async (dispatch) => {
   dispatch({ type: EDIT_USER_REQUEST });
   try {
      const response = await axios({
         method: "put",
         url: `${Url}/api/user/edit/${id}`,
         data: user,
      });
      const data = response.data;

      dispatch({ type: EDIT_USER_SUCCESS, payload: data });
   } catch (error) {
      dispatch({ type: EDIT_USER_FAILURE, payload: error.response.data.error });
   }
};
