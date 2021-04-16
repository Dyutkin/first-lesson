import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthPage from "../../Components/AuthPage";
import { getIsUserLogin } from "../../store/selectors";

const AuthPageContainer: FC = () => {
  const isLogIn = useSelector(getIsUserLogin);
  const history = useHistory();

  const redirectOnMainPage = () => {
    if (isLogIn) history.push("/");
  };

  useEffect(redirectOnMainPage, [isLogIn, history]);

  return (
    <>
      <AuthPage />
    </>
  );
};

export default AuthPageContainer;
