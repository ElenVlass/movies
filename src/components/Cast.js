import { Component } from "react";
import defaultStar from "../images/star.png";

class Cast extends Component {
  static defaultProps = {
    profile_path: defaultStar,
  };
  render() {
    const { actors } = this.props;
    return (
      <ul>
        {actors.cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <span>{name}</span>
            {profile_path && (
              <img
                src={`https://www.themoviedb.org/t/p/w200${profile_path}`}
                alt=""
              />
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
