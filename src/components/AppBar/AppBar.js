import React from "react";
import styles from "./AppBar.module.scss";
import logo from "../../images/logo.png";
import { CSSTransition } from "react-transition-group";

import Navigation from "../Navigation";

const AppBar = () => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={250}
    classNames={styles}
    unmountOnExit
  >
    <header className={styles.AppBar}>
      <div className={styles.Navigation}>
        <div className={styles.Logo}>
          <img src={logo} alt="logo" width="60" />
        </div>
        <Navigation />
      </div>
    </header>
  </CSSTransition>
);

export default AppBar;
