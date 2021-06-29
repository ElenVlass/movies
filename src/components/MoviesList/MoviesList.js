import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesList.module.scss";

class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        poster_path: PropTypes.string,
      })
    ),
  };

  render() {
    const { movies, location, search } = this.props;
    return (
      <ul className={styles.MoviesList}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id} className={styles.MovieCard}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                // search: `query=${search}`,
                state: { from: location },
              }}
            >
              <MovieCard id={id} title={title} poster={poster_path} />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(MoviesList);
