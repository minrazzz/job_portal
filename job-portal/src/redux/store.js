import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducers from "./rootReducers";

// let initialState = {
//    login: {
//       userInfo: localStorage.getItem("userInfo")
//          ? JSON.parse(localStorage.getItem("userInfo"))
//          : null,
//    },
// };

const store = createStore(
   rootReducers,
   composeWithDevTools(applyMiddleware(thunk))
);

export default store;
