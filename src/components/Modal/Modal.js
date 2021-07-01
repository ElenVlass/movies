import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

export default class Modal extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
  };
  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (evt) => {
    if (evt.code === "Escape") {
      this.props.closeModal();
    }
  };
  onOverlayClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { src, onImageClick } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.onOverlayClick}>
        <div className={styles.Modal}>
          <img src={src} alt="poster" onClick={onImageClick} />
        </div>
      </div>
    );
  }
}
