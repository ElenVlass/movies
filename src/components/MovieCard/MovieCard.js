import { Component } from "react";
import styles from "./MovieCard.module.scss";

export default class MovieCard extends Component {
  render() {
    const { title, poster } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.MovieCard_thumb}>
          {/* {poster && <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title}/>} */}
        </div>
        <div className={styles.MovieCard_meta}>
          <h2>{title}</h2>
        </div>
      </div>
    );
  }
}
