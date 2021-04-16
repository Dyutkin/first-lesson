import { IState } from "./types";

export const getIsUserLogin = (state: IState) => state.isLogIn;
export const getIsUserMail = (state: IState) => state.email;
export const getUserInfo = (state: IState) => ({
  login: state.login,
  password: state.password,
  email: state.email,
});
