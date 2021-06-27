import { Component } from "react";
import defaultStar from "../images/star.png";
import PropTypes, { arrayOf } from "prop-types";

class Cast extends Component {
  static defaultProps = {
    profile_path: defaultStar,
  };
  static propTypes = {
    actors: PropTypes.shape({
      cast: arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          profile_path: PropTypes.string,
        })
      ),
    }),
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
