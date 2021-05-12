export enum AuthPageActionType {
  userLogIn = "USER_LOGIN",
  userRegister = "USER_REGISTER",
  setUserLogin = "USER_LOGIN_SET",
  setUserLogOut = "USER_LOGOUT",
  checkUserPassword = "USER_PASSWORD_CHECK",
  changeUserPassword = "USER_PASSWORD_CHANGE",
  changeUserEmail = "USER_EMAIL_CHANGE",
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

export const userLogInAction = (obj: {
  login: string;
  password: string;
  email?: string;
}) => {
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

export const setUserLogOutAction = () => {
  return {
    type: AuthPageActionType.setUserLogOut,
  };
};

export const setUserRegistration = (isLogIn: boolean) => {
  return {
    type: AuthPageActionType.setUserLogin,
    payload: isLogIn,
  };
};

export const checkUserPassword = (password: string) => {
  return {
    type: AuthPageActionType.setUserLogin,
    payload: password,
  };
};

export const userSetNewPasswordAction = (obj: {
  login: string;
  password: string;
}) => {
  return {
    type: AuthPageActionType.changeUserPassword,
    payload: obj,
  };
};

export const userSetNewEmailAction = (obj: {
  login: string;
  email: string;
}) => {
  return {
    type: AuthPageActionType.changeUserEmail,
    payload: obj,
  };
};
