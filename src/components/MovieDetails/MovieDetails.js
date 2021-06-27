import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./MovieDetails.module.scss";
import defaultStar from "../../images/star.png";

export default class MovieDetails extends Component {
  static defaultProps = {
    profile_path: defaultStar,
  };
  static propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string,
    overview: PropTypes.string,
    score: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  };
  render() {
    const { title, poster, overview, score, genres } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.MovieCard_thumb}>
          {poster && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              alt={title}
            />
          )}
        </div>
        <div className={styles.MovieCard_meta}>
          <h2>{title}</h2>
          <p>User Score: {score}</p>
          <p>Overview: {overview}</p>
          <ul>
            Genres:{" "}
            {genres && genres.map(({ id, name }) => <li key={id}> {name} </li>)}
          </ul>
        </div>
      </div>
    );
  }
}
