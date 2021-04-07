import React from "react";
import { Link } from "react-router-dom";
import style from "./Logo.module.scss";
import logo from "../../../../assets/image/logo.svg";

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <div className={style.logo_wrapper}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </>
    );
  }
}

export default Header;
