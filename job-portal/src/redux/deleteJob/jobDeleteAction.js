import axios from "axios";
import {
   JOB_DELETE_FAILURE,
   JOB_DELETE_REQUEST,
   JOB_DELETE_SUCCESS,
} from "./constant";

const Url = "http://localhost:5000";

// /api/admin/user/delete/id

export const jobDeleteAction = (id) => async (dispatch) => {
   dispatch({ type: JOB_DELETE_REQUEST });
   try {
      const { data } = await axios({
         method: "delete",
         url: `${Url}/api/admin/job/delete/${id}`,
         withCredentials: true,
      });
      dispatch({ type: JOB_DELETE_SUCCESS, payload: data });
   } catch (error) {
      dispatch({
         type: JOB_DELETE_FAILURE,
         payload: error.response.data.error,
      });
   }
};
