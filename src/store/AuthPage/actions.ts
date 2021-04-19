export enum AuthPageActionType {
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
    type: AuthPageActionType.userRegister,
    payload: obj,
  };
};

export const userLogInAction = (obj: { login: string; password: string }) => {
  return {
    type: AuthPageActionType.userLogIn,
    payload: obj,
  };
};

export const setUserLoginAction = (isLogIn: boolean) => {
  return {
    type: AuthPageActionType.setUserLogin,
    payload: isLogIn,
  };
};

export const setUserRegistration = (isLogIn: boolean) => {
  return {
    type: AuthPageActionType.setUserLogin,
    payload: isLogIn,
  };
};
