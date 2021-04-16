import { IState } from "./types";
import { ActionType } from "./actions";

const initialState: IState = {
  login: "",
  password: "",
  email: "",
  isLogIn: false,
};

const reducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ActionType.setUserLogin:
      return {
        ...state,
        isLogIn: action.payload,
      };
    case ActionType.userLogIn:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.userRegister:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
