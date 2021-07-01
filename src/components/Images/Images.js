import { Component } from "react";
import "../../styles/base.scss";
import styles from "./Images.module.scss";
import Modal from "../Modal";

export default class Images extends Component {
  state = {
    baseUrl: "https://image.tmdb.org/t/p/w200/",
    currentImgIdx: 0,
    isModalOpen: false,
  };
  showPrewImg = () => {
    this.setState((prevState) => ({
      currentImgIdx: prevState.currentImgIdx - 1,
    }));
  };
  showNextImg = () => {
    this.setState((prevState) => ({
      currentImgIdx: prevState.currentImgIdx + 1,
    }));
  };
  toggleModal = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };
  onImageClick = () => {
    const { images } = this.props;
    const { currentImgIdx } = this.state;
    if (currentImgIdx === images.length - 1) {
      this.toggleModal();
    } else {
      this.showNextImg();
    }
  };
  render() {
    const { images } = this.props;
    const { baseUrl, currentImgIdx, isModalOpen } = this.state;

    const isOnFirstImg = currentImgIdx === 0;
    const isOnLastImg = currentImgIdx === images.length - 1;
    const image = images[currentImgIdx].file_path;
    const imageUrl = `${baseUrl}${image}`;

    return (
      <>
        <div className={styles.ImagesContainer}>
          <div className="controls" className={styles.Controls}>
            <button
              type="button"
              onClick={this.showPrewImg}
              disabled={isOnFirstImg}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={this.showNextImg}
              disabled={isOnLastImg}
            >
              Next
            </button>
          </div>
          <img
            src={imageUrl}
            alt="movie poster"
            width="400"
            onClick={this.toggleModal}
          />
        </div>
        {isModalOpen && (
          <Modal
            src={imageUrl}
            closeModal={this.toggleModal}
            onImageClick={this.onImageClick}
          />
        )}
      </>
    );
  }
}
