import React from "react";
import { useSelector } from "react-redux";
import style from "./Header.module.scss";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import UserInfo from "./UserInfo";
import NavButtons from "./NavButtons";
import { getIsUserLogin, getUserInfo } from "../../../store/AuthPage/selectors";

const Header = () => {
  const isLogIn = useSelector(getIsUserLogin);
  const userInfo = useSelector(getUserInfo);

  return (
    <>
      <header className={style.header_wrapper}>
        <Logo />
        <NavMenu />
        {isLogIn ? <UserInfo login={userInfo.login} /> : <NavButtons />}
      </header>
    </>
  );
};

export default Header;
