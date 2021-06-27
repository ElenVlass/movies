import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <ul className={styles.NavList}>
    <li className={styles.List}>
      <NavLink
        exact
        to={routes.home}
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.List}>
      <NavLink
        to={routes.movies}
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
