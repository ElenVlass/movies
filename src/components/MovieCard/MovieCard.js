import { Component } from "react";

class MovieCard extends Component {
  render() {
    const { title, poster } = this.props;
    return (
      <>
        <img src={`https://image.tmdb.org/t/p/w200/${poster}`} alt={title} />
        <p>{title}</p>
      </>
    );
  }
}
export default MovieCard;
