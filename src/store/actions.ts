export enum ActionType {
  userLogin = "USER_LOGIN",
}

export const userLoginAction = (login: string) => {
  return {
    type: ActionType.userLogin,
    payload: login,
  };
};
