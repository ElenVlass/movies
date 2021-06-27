import React from "react";

import { Link } from "react-router-dom";
import styles from "../components/MoviesList/MoviesList.module.scss";

import { getMovies } from "../services/themovie-api";

class HomePage extends React.Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const movies = await getMovies();
    this.setState({ movies });
  }
  render() {
    console.log(this.props.match.url);
    return (
      <ul className={styles.MoviesList}>
        {this.state?.movies.map(({ id, title, poster_path }) => (
          <li key={id} className={styles.MovieCard}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
              alt={title}
            />
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default HomePage;
