import { Component } from "react";
import PropTypes from "prop-types";
import defaultStar from "../../images/star.png";
import styles from "./Cast.module.scss";

class Cast extends Component {
  static defaultProps = {
    profile_path: defaultStar,
  };
  static propTypes = {
    actors: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        profile_path: PropTypes.string,
      })
    ),
  };
  render() {
    const { actors } = this.props;
    return (
      <ul className={styles.CastList}>
        {actors?.map(({ id, name, profile_path }) => (
          <li key={id} className={styles.CastItem}>
            <span className={styles.CastName}>{name}</span>
            {profile_path && (
              <img
                src={`https://www.themoviedb.org/t/p/w200${profile_path}`}
                alt=""
                className={styles.CastImg}
              />
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
