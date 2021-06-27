import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./MoviesList.module.scss";
import PropTypes from "prop-types";

const MoviesList = ({ movies, match }) => (
  <ul className={styles.MoviesList}>
    {movies?.map(({ id, title, poster_path }) => (
      <li key={id} className={styles.MovieCard}>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title}
            width="80"
          />
        )}
        <Link to={`${match.url}/${id}`}>{title}</Link>
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
