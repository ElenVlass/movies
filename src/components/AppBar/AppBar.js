import React from "react";
import styles from "./AppBar.module.scss";
import logo from "../../images/logo.png";

import Navigation from "../Navigation";

const AppBar = () => (
  <header className={styles.AppBar}>
    {/* <Container> */}
    <div className={styles.Navigation}>
      <div className={styles.Logo}>
        <img src={logo} alt="logo" width="60" />
      </div>
      <Navigation />
    </div>
  </header>
);

export default AppBar;
