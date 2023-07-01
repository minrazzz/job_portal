import axios from "axios";
import {
   USER_DELETE_FAILURE,
   USER_DELETE_REQUEST,
   USER_DELETE_SUCCESS,
} from "./constant";

const Url = "http://localhost:5000";

// /api/admin/user/delete/id

export const userDeleteAction = (id) => async (dispatch) => {
   dispatch({ type: USER_DELETE_REQUEST });
   try {
      const { data } = await axios({
         method: "delete",
         url: `${Url}/api/admin/user/delete/${id}`,
         withCredentials: true,
      });
      dispatch({ type: USER_DELETE_SUCCESS, payload: data });
   } catch (error) {
      dispatch({
         type: USER_DELETE_FAILURE,
         payload: error.response.data.error,
      });
   }
};
