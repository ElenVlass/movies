import React from "react";

import { getMovies } from "../services/themovie-api";
import MoviesList from "../components/MoviesList";
import LoadMore from "../components/LoadMore";

class HomePage extends React.Component {
  state = {
    movies: [],
    currentPage: 1,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    this.setState({ loading: true });
    const movies = await getMovies(this.state.currentPage)
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
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
        {movies.length > 0 && <MoviesList movies={movies} />}
        <LoadMore onClick={this.fetchMovies} />
      </>
    );
  }
}

export default HomePage;
