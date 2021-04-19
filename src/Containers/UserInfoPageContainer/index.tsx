import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import UserInfoPage from "../../Components/UserInfoPage";
import { getIsUserLogin } from "../../store/AuthPage/selectors";

const UserInfoPageContainer: FC = () => {
  const isLogIn = useSelector(getIsUserLogin);
  const history = useHistory();

  const handleRedirectOnRegistrationPage = () => {
    if (!isLogIn) {
      history.push("/registration");
    }
  };
  useEffect(handleRedirectOnRegistrationPage, [history, isLogIn]);

  return (
    <>
      <UserInfoPage />
    </>
  );
};

export default UserInfoPageContainer;
