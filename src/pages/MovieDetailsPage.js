import { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import { getMovieById } from "../services/themovie-api";
import MovieDetails from "../components/MovieDetails";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";

import styles from "../components/MovieDetails/MovieDetails.module.scss";

class MovieDetailsPage extends Component {
  state = {
    title: null,
    poster: null,
    overview: null,
    score: null,
    genres: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movie = await getMovieById(movieId);
    console.log(movie);
    this.setState({ ...movie });
  }

  render() {
    const { title, poster_path, overview, vote_average, genres, credits } =
      this.state;
    const { match } = this.props;

    return (
      <>
        <MovieDetails
          title={title}
          poster={poster_path}
          overview={overview}
          score={vote_average}
          genres={genres}
        />
        <div className={styles.AdditionalInfo}>
          <p>Additional Information {this.props.match.url}</p>
          <ul>
            <li>
              <NavLink to={`${match.url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <Route
            path={`${this.props.match.path}/cast`}
            render={(props) => <Cast {...props} actors={credits} />}
          />

          <Route
            path={`${this.props.match.path}/reviews`}
            render={(props) => <Reviews {...props} />}
          />
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
