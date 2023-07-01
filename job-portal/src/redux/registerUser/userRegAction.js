import axios from "axios";
import {
   USER_REG_FAILURE,
   USER_REG_REQUEST,
   USER_REG_SUCCESS,
} from "./constant";
const Url = "http://localhost:5000";

export const userRegAction = (userInfo) => async (dispatch) => {
   dispatch({ type: USER_REG_REQUEST });
   try {
      const { data } = await axios({
         method: "post",
         url: `${Url}/api/register`,
         data: userInfo,
      });
      dispatch({ type: USER_REG_SUCCESS, payload: data });
   } catch (error) {
      dispatch({ type: USER_REG_FAILURE, payload: error.response.data.error });
   }
};
