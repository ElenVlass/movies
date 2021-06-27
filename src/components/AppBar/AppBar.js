import React from "react";
import styles from "./AppBar.module.scss";

import Navigation from "../Navigation";

const AppBar = () => (
  <header className={styles.AppBar}>
    <Navigation />
  </header>
);

export default AppBar;
