import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import styles from "./App.module.scss";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Cast from "./pages/Cast";
import Reviews from "./pages/Reviews";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className={styles.NavLink}
          activeClassName={styles.NavLink__active}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={styles.NavLink}
          activeClassName={styles.NavLink__active}
        >
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
