import React from "react";
import { Link, withRouter } from "react-router-dom";
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
    this.props.location.search = `${search}`;
  };

  render() {
    const { search, movies } = this.state;
    return (
      <div className="MoviesPage">
        <form onSubmit={this.searchMovie}>
          <input value={search} onChange={this.onChangeQuery}></input>
          <button type="submit">Search</button>
          {/* <Link to={`/movies?query=${search}`}>Search</Link> */}
        </form>
        {movies && (
          <MoviesList
            movies={this.state.movies}
            location={this.props.location}
          />
        )}
      </div>
    );
  }
}

export default withRouter(MoviesPage);
