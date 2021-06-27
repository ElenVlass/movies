import { Component } from "react";

class Reviews extends Component {
  static defaultProps = {
    reviews: "We don't have any rewiews for this movie",
  };
  render() {
    return <h1>This is Reviews</h1>;
  }
}

export default Reviews;
