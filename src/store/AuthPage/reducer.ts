import { IAuthPageIState } from "./types";
import { AuthPageActionType } from "./actions";

const initialState: IAuthPageIState = {
  login: "",
  password: "",
  email: "",
  isLogIn: false,
  users: [],
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
        users: [
          ...state.users,
          {
            id: state.users.length,
            ...action.payload,
          },
        ],
      };
    case AuthPageActionType.setUserLogOut:
      return {
        ...initialState,
        users: state.users,
      };
    case AuthPageActionType.changeUserPassword:
      return {
        ...state,
        users: [
          ...state.users.map((user) => {
            if (user.login === action.payload.login) {
              return { ...user, password: action.payload.password };
            }
            return user;
          }),
        ],
      };
    case AuthPageActionType.changeUserEmail:
      return {
        ...state,
        users: [
          ...state.users.map((user) => {
            if (user.login === action.payload.login) {
              return { ...user, email: action.payload.email };
            }
            return user;
          }),
        ],
      };
    default:
      return state;
  }
};

export default authPageReducer;
