import IState from "../rootTypes";

export const getIsUserLogin = (state: IState) => state.auth.isLogIn;
export const getIsUserMail = (state: IState) => state.auth.email;
export const getUserInfo = (state: IState) => ({
  login: state.auth.login,
  password: state.auth.password,
  email: state.auth.email,
});
