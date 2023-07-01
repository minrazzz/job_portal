import axios from "axios";
import {
   JOB_TYPE_DELETE_FAILURE,
   JOB_TYPE_DELETE_REQUEST,
   JOB_TYPE_DELETE_SUCCESS,
} from "./constant";

const Url = "http://localhost:5000";

// /api/admin/job/delete/:id

export const jobTypeDeleteAction = (id) => async (dispatch) => {
   dispatch({ type: JOB_TYPE_DELETE_REQUEST });
   try {
      const { data } = await axios({
         method: "delete",
         url: `${Url}/api/type/delete/${id}`,
         withCredentials: true,
      });
      dispatch({ type: JOB_TYPE_DELETE_SUCCESS, payload: data });
   } catch (error) {
      dispatch({
         type: JOB_TYPE_DELETE_FAILURE,
         payload: error.response.data.error,
      });
   }
};
