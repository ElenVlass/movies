import { Component } from "react";
import { Link } from "react-router-dom";

export default class MovieCard extends Component {
  render() {
    const { id, title, poster } = this.props;
    return (
      <>
        <img src={`https://image.tmdb.org/t/p/w200/${poster}`} alt={title} />
        <Link to={`movies/${id}`}>{title}</Link>
      </>
    );
  }
}
