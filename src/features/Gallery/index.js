import React, { Component } from "react";
import GalleryImage from "./Image";
import { connect } from "react-redux";
import { getImages, clearGallery, openModalWindow, closeModalWindow } from "./actions";
import ModalWindowGallery from "./ModalWindow";

const mapStateToProps = state => ({
  gallery: state.gallery
});

class Gallery extends Component {
  componentDidMount() {
    this.props.dispatch(getImages());
  }

  componentWillUnmount() {
    this.props.dispatch(clearGallery());
  }

  openModalWindow = img => {
    return !this.props.gallery.modalWindow.isOpen
      ? this.props.dispatch(openModalWindow(img))
      : "";
  };

  closeModalWindowOnMouseClick = e => {
    if (e.target) {
      this.props.dispatch(closeModalWindow());
    }
  };

  render() {
    const { gallery } = this.props;
    const { isOpen, img } = this.props.gallery.modalWindow;

    return (
      <div className="gallery">
        {gallery.images.length === 0 ? (
          <div className="spinner" />
        ) : (
          gallery.images.map((image, key) => (
            <GalleryImage
              key={key}
              img={image}
              openModalWindow={() => this.openModalWindow(image)}
            />
          ))
        )}
        {isOpen ? (
          <ModalWindowGallery
            isOpen={isOpen}
            img={img}
            closeModalWindowOnMouseClick={e =>
              this.closeModalWindowOnMouseClick(e)
            }
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default (Gallery = connect(mapStateToProps)(Gallery));
