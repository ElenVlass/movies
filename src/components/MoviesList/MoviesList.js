import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./MoviesList.module.scss";
// import routes from '../../routes';

// import MovieCard from '../MovieCard'

const MoviesList = ({ movies, match }) => (
  <ul className={styles.MoviesList}>
    {movies.map(
      ({ id, title, poster_path, overview, vote_average, release_date }) => (
        <li key={id} className={styles.MovieCard}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title}
            width="80"
          />
          <Link to={`${match.url}/${id}`}>
            {title}
            {/* <Link to={`movies/${id}`}> */}
            {/* <MovieCard title={title} poster_path={poster_path}/> */}
          </Link>
        </li>
      )
    )}
  </ul>
);

export default withRouter(MoviesList);
