import { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import { getMovieById } from "../services/themovie-api";
import MovieDetails from "../components/MovieDetails";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import routes from "../routes";
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
  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const {
      title,
      poster_path,
      overview,
      vote_average,
      genres,
      credits,
      reviews,
    } = this.state;
    const { match } = this.props;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          <span role="img" aria-label="Go back">
            🔙{" "}
          </span>
          Go back
        </button>
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
            render={(props) => {
              return credits && <Cast {...props} actors={credits} />;
            }}
          />

          <Route
            path={`${this.props.match.path}/reviews`}
            render={(props) => {
              return reviews && <Reviews {...props} reviews={reviews} />;
            }}
          />
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
