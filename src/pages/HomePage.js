import React from "react";

import { getMovies } from "../services/themovie-api";
import MoviesList from "../components/MoviesList";

class HomePage extends React.Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const movies = await getMovies();
    this.setState({ movies });
  }

  render() {
    // console.log(this.props.match.url);
    const { movies } = this.state;

    return <>{movies && <MoviesList movies={movies} />}</>;
  }
}

export default HomePage;
