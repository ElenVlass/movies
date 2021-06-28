import { Component } from "react";
import styles from "./LoadMore.module.scss";
import PropTypes from "prop-types";

export default class LoadMore extends Component {
  static defaultProps = {
    onClick: () => null,
  };
  static propTypes = {
    onClick: PropTypes.func,
  };

  render() {
    return (
      <button
        type="button"
        onClick={this.props.onClick}
        className={styles.Button}
      >
        Load more
      </button>
    );
  }
}
