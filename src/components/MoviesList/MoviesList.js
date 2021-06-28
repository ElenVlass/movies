import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesList.module.scss";

const MoviesList = ({ movies }) => (
  <ul className={styles.MoviesList}>
    {movies.map(({ id, title, poster_path }) => (
      <li key={id} className={styles.MovieCard}>
        <MovieCard id={id} title={title} poster={poster_path} />
      </li>
    ))}
  </ul>
);
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
export default withRouter(MoviesList);
