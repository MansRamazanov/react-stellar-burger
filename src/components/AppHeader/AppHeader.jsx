import styles from "./AppHeader.module.css";
import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function AppHeader() {

  const constructorClassesNavConstructor = ["pr-15 pl-2 text text_type_main-default"].join(" ");
  const constructorClassesNavOrderFeed = ["pl-2 text text_type_main-default text_color_inactive"].join(" ");
  const constructorClassesProfile = ["pl-3 text text_type_main-default text_color_inactive"].join(" ");

  return (
    <header className={styles.shell}>
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav_components}>
          <BurgerIcon type="primary"/>
          <span className={constructorClassesNavConstructor}>Конструктор</span>
        </div>
        <div className={styles.nav_components}>
          <ListIcon type="secondary" />
          <span className={constructorClassesNavOrderFeed}  >Лента заказов</span>
        </div>
      </nav>
      <Logo  className={styles.logo}/>
      <div className={styles.nav_components}>
        <ProfileIcon type="secondary" />
        <span className={constructorClassesProfile}>Личный кабинет</span>
      </div>
    </div>
    </header>
  );
}
