import React from "react";
import { withRouter } from "react-router-dom";
import { searchMovies } from "../services/themovie-api";

import MoviesList from "../components/MoviesList";
import "../styles/base.scss";

class MoviesPage extends React.Component {
  state = {
    movies: [],
    search: "",
  };

  async componentDidMount() {
    const paramsString = this.props.history?.location?.search;
    const searchParams = new URLSearchParams(paramsString);
    const search = searchParams.get("query");
    if (search) {
      const movies = await searchMovies(search);
      this.setState({ movies });
    }
  }

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

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?query=${search}`,
    });
  };

  render() {
    const { search, movies } = this.state;
    return (
      <div>
        <form onSubmit={this.searchMovie} className="MoviesForm">
          <input value={search} onChange={this.onChangeQuery}></input>
          <button type="submit">Search</button>
        </form>
        {movies.length > 0 && (
          <MoviesList
            movies={this.state.movies}
            location={this.props.location}
            search={search}
          />
        )}
      </div>
    );
  }
}

export default withRouter(MoviesPage);
