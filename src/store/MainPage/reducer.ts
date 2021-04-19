import { IMainPageState } from "./types";
import { MainPageActionType } from "./actions";

const initialState: IMainPageState = { data: [] };

const mainPageReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case MainPageActionType.getSliderData:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default mainPageReducer;
