import { Component } from "react";
import styles from "./MovieCard.module.scss";

class MovieCard extends Component {
  render() {
    const { title, poster } = this.props;
    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster}`}
          alt={title}
          className={styles.image}
        />
        <p className={styles.title}>{title}</p>
      </>
    );
  }
}
export default MovieCard;
