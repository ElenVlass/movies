import React from "react";

import { getMovies } from "../services/themovie-api";
import MoviesList from "../components/MoviesList";
import LoadMore from "../components/LoadMore";

class HomePage extends React.Component {
  state = {
    movies: [],
    currentPage: 1,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const movies = await getMovies(this.state.currentPage);
    this.setState((prevState) => ({
      movies: [...prevState.movies, ...movies],
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    // console.log(this.props.match.url);
    const { movies } = this.state;

    return (
      <>
        {movies && <MoviesList movies={movies} />}
        <LoadMore onClick={this.fetchMovies} />
      </>
    );
  }
}

export default HomePage;
