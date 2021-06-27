import { Component } from "react";
// import { NavLink } from 'react-router-dom';
import styles from "./MovieDetails.module.scss";
// import routes from '../../routes';
import defaultStar from "../../images/star.png";

export default class MovieDetails extends Component {
  static defaultProps = {
    profile_path: defaultStar,
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
