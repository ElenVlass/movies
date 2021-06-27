import React from "react";
import { withRouter } from "react-router-dom";
import { searchMovies } from "../services/themovie-api";

import MoviesList from "../components/MoviesList";
import "../styles/base.scss";

class MoviesPage extends React.Component {
  state = {
    movies: [],
    initialQuery: " ",
  };

  onChangeQuery = (evt) => {
    this.setState({
      initialQuery: evt.currentTarget.value,
    });
  };
  searchMovie = async (evt) => {
    evt.preventDefault();
    const { initialQuery } = this.state;
    const movies = await searchMovies(initialQuery);
    this.setState({ movies });
  };

  // async componentDidMount() {
  //     const movies = await getMoviesById();
  //     this.setState({movies})
  //     console.log(movies);
  // }
  render() {
    const { initialQuery } = this.state;
    return (
      <div className="MoviesPage">
        <form onSubmit={this.searchMovie}>
          <input value={initialQuery} onChange={this.onChangeQuery}></input>
          <button type="submit">Search</button>
        </form>
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default withRouter(MoviesPage);
