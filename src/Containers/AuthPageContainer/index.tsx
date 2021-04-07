import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthPage from "../../Components/AuthPage";
import { getUserLogin } from "../../store/selectors";

const AuthPageContainer: FC = () => {
  const login = useSelector(getUserLogin);
  const history = useHistory();

  const redirectOnMainPage = () => {
    if (login) history.push("/");
  };

  useEffect(redirectOnMainPage, [login, history]);

  return (
    <>
      <AuthPage />
    </>
  );
};

export default AuthPageContainer;
