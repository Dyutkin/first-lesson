import { IAuthPageIState } from "./AuthPage/types";
import { IMainPageState } from "./MainPage/types";

type IState = {
  auth: IAuthPageIState;
  main: IMainPageState;
};

export default IState;
