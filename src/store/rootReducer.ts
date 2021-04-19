import { combineReducers } from "redux";
import authPageReducer from "./AuthPage/reducer";
import mainPageReducer from "./MainPage/reducer";

const rootReducer = combineReducers({
  auth: authPageReducer,
  main: mainPageReducer,
});

export default rootReducer;
