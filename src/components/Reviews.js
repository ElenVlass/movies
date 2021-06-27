import { Component } from "react";

class Reviews extends Component {
  static defaultProps = {
    reviews: "We don't have any rewiews for this movie",
  };
  render() {
    const { reviews } = this.props;
    console.log(reviews);
    return (
      <ul>
        {reviews.results.length === 0
          ? "We don't have any rewiews for this movie"
          : reviews.results.map(({ id, author, content }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            ))}
      </ul>
    );
  }
}

export default Reviews;
