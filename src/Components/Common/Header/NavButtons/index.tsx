import React from "react";
import { Link } from "react-router-dom";
import style from "./NavButtons.module.scss";

const NavButtons = () => {
  return (
    <>
      <div className={style["nav-buttons_wrapper"]}>
        <Link to="/auth">
          <button type="button">LOGIN</button>
        </Link>
        <Link to="/registration">
          <button type="button">SIGN UP</button>
        </Link>
      </div>
    </>
  );
};

export default NavButtons;
