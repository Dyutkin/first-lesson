import React from "react";
import { useSelector } from "react-redux";
import style from "./Header.module.scss";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import UserInfo from "./UserInfo";
import NavButtons from "./NavButtons";
import { getUserLogin } from "../../../store/selectors";

const Header = () => {
  const login = useSelector(getUserLogin);

  return (
    <>
      <header className={style.header_wrapper}>
        <Logo />
        <NavMenu />
        {login ? <UserInfo login={login} /> : <NavButtons />}
      </header>
    </>
  );
};

export default Header;
