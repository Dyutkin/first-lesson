import IState from "../rootTypes";

export const getIsUserLogin = (state: IState) => state.auth.isLogIn;
export const getIsUserMail = (state: IState) => state.auth.email;
export const getUserInfo = (state: IState) => ({
  login: state.auth.login,
  password: state.auth.password,
  email: state.auth.email,
});
export const getIsPasswordCorrect = (state: IState) => {
  return state.auth.users.some(
    (user) =>
      user.password === state.auth.password && user.login === state.auth.login
  );
};
export const getIsUserCorrect = (state: IState) => {
  return state.auth.users.some((user) => user.login === state.auth.login);
};
export const getRegisterUserMail = (state: IState) => {
  return (
    state.auth.users.find((user) => user.login === state.auth.login)?.email ||
    ""
  );
};
export const getRegisterUserLogin = (state: IState) => {
  return (
    state.auth.users.find((user) => user.login === state.auth.login)?.login ||
    ""
  );
};
