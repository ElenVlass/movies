import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { getMovieById } from "../services/themovie-api";
import MovieDetails from "../components/MovieDetails";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import Images from "../components/Images";
import routes from "../routes";
import styles from "../components/MovieDetails/MovieDetails.module.scss";

class MovieDetailsPage extends Component {
  state = {
    title: null,
    poster: null,
    overview: null,
    score: null,
    genres: null,
    tagline: null,
    credits: null,
    reviews: null,
    images: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movie = await getMovieById(movieId);
    console.log(movie);
    this.setState({ ...movie });
  }
  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      title,
      poster_path,
      overview,
      vote_average,
      tagline,
      genres,
      credits,
      reviews,
      images,
    } = this.state;

    const { match, location, history } = this.props;

    return (
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={styles}
        unmountOnExit
      >
        <div>
          <MovieDetails
            title={title}
            poster={poster_path}
            overview={overview}
            score={vote_average}
            genres={genres}
            tagline={tagline}
            onClick={this.handleGoBack}
          />

          <div className={styles.AdditionalInfo}>
            <p className={styles.AdditionalInfo__title}>
              Additional Information
            </p>
            <ul className={styles.AdditionalList}>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/cast`,
                    state: {
                      from: `/movies/${history.location.state.from.search}`,
                    },
                  }}
                  className={styles.NavLinkAdditional}
                  activeClassName={styles.ActiveNavLinkAdditional}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: {
                      from: `/movies/${history.location.state.from.search}`,
                    },
                  }}
                  className={styles.NavLinkAdditional}
                  activeClassName={styles.ActiveNavLinkAdditional}
                >
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/images`,
                    state: {
                      from: `/movies/${history.location.state.from.search}`,
                    },
                  }}
                  className={styles.NavLinkAdditional}
                  activeClassName={styles.ActiveNavLinkAdditional}
                >
                  Images
                </NavLink>
              </li>
            </ul>

            <Route
              path={`${match.path}/cast`}
              render={(props) => {
                return credits && <Cast {...props} actors={credits.cast} />;
              }}
            />

            <Route
              path={`${match.path}/reviews`}
              render={(props) => {
                return (
                  reviews && <Reviews {...props} reviews={reviews.results} />
                );
              }}
            />

            <Route
              path={`${match.path}/images`}
              render={(props) => {
                return (
                  images && <Images {...props} images={images.backdrops} />
                );
              }}
            />
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default MovieDetailsPage;
