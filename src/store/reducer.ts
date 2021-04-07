import { IState } from "./types";
import { ActionType } from "./actions";

const initialState: IState = {
  login: "",
};

const reducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ActionType.userLogin:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
