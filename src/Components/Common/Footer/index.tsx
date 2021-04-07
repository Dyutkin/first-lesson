import React from "react";
import style from "./Footer.module.scss";

class Footer extends React.PureComponent {
  render() {
    return (
      <>
        <footer className={style.footer_wrapper}>
          <div className={style.description}>
            Учебный проект по изучению React
          </div>
          <div className={style.location}>Нижний Новгород 2021</div>
        </footer>
      </>
    );
  }
}

export default Footer;
