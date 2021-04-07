import React from "react";
import style from "./NavMenu.module.scss";

class NavMenu extends React.PureComponent {
  render() {
    return (
      <>
        <nav className={style.nav_wrapper}>
          <ul className={style.nav_list}>
            <li>О нас</li>
            <li>Главная</li>
            <li>Блог</li>
            <li>Новости</li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavMenu;
