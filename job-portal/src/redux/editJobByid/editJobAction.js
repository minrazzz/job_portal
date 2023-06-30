import axios from "axios";
import {
   EDIT_JOB_FAILURE,
   EDIT_JOB_REQUEST,
   EDIT_JOB_SUCCESS,
} from "./constant";
const Url = "http://localhost:5000";

export const editJobAction = (id, editedJob) => async (dispatch) => {
   dispatch({ type: EDIT_JOB_REQUEST });
   try {
      const response = await axios({
         method: "put",
         url: `${Url}/api/edit/single-job/${id}`,
         data: editedJob,
         withCredentials: true,
      });
      const data = response.data;
      dispatch({ type: EDIT_JOB_SUCCESS, payload: data });
   } catch (error) {
      dispatch({ type: EDIT_JOB_FAILURE, payload: error.response.data.error });
   }
};
