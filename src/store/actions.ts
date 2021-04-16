export enum ActionType {
  userLogIn = "USER_LOGIN",
  userRegister = "USER_REGISTER",
  setUserLogin = "USER_LOGIN_SET",
}

export const userRegistrationAction = (obj: {
  login: string;
  email?: string;
  password: string;
}) => {
  return {
    type: ActionType.userRegister,
    payload: obj,
  };
};

export const userLogInAction = (obj: { login: string; password: string }) => {
  return {
    type: ActionType.userLogIn,
    payload: obj,
  };
};

export const setUserLoginAction = (isLogIn: boolean) => {
  return {
    type: ActionType.setUserLogin,
    payload: isLogIn,
  };
};

export const setUserRegistration = (isLogIn: boolean) => {
  return {
    type: ActionType.setUserLogin,
    payload: isLogIn,
  };
};
