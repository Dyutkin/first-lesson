import { IAuthPageIState } from "./types";
import { AuthPageActionType } from "./actions";

const initialState: IAuthPageIState = {
  login: "",
  password: "",
  email: "",
  isLogIn: false,
};

const authPageReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case AuthPageActionType.setUserLogin:
      return {
        ...state,
        isLogIn: action.payload,
      };
    case AuthPageActionType.userLogIn:
      return {
        ...state,
        ...action.payload,
      };
    case AuthPageActionType.userRegister:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authPageReducer;
