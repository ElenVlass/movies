import React from "react";
import { withRouter } from "react-router-dom";
import { searchMovies } from "../services/themovie-api";

import MoviesList from "../components/MoviesList";
import "../styles/base.scss";

class MoviesPage extends React.Component {
  state = {
    movies: [],
    search: " ",
  };

  onChangeQuery = (evt) => {
    this.setState({
      search: evt.currentTarget.value,
    });
  };
  searchMovie = async (evt) => {
    evt.preventDefault();
    const { search } = this.state;
    const movies = await searchMovies(search);
    this.setState({ movies });
    // document.location.search = `?query=${search}`
  };

  // async componentDidMount() {
  //     const movies = await getMoviesById();
  //     this.setState({movies})
  //     console.log(movies);
  // }
  render() {
    const { search } = this.state;
    return (
      <div className="MoviesPage">
        <form onSubmit={this.searchMovie}>
          <input value={search} onChange={this.onChangeQuery}></input>
          <button type="submit">Search</button>
        </form>
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default withRouter(MoviesPage);
