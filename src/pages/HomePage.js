import React from "react";

import { Link } from "react-router-dom";
import styles from "../components/MoviesList/MoviesList.module.scss";

import { getMovies } from "../services/themovie-api";

// import MoviesList from '../components/MoviesList'

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
      //    <MoviesList movies={this.state.movies}/>
      <ul className={styles.MoviesList}>
        {this.state.movies.map(({ id, title, poster_path }) => (
          <li key={id} className={styles.MovieCard}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
              alt={title}
            />
            {/* <Link to={`${this.props.match.url}/${id}`}> */}
            <Link to={`movies/${id}`}>
              {title}
              {/* <Link to={`movies/${id}`}> */}
              {/* <MovieCard title={title} poster_path={poster_path}/> */}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default HomePage;
