import React, { Component } from "react";
import GalleryImage from "./Image";
import { connect } from "react-redux";
// import { GET_IMAGES } from "./actionTypes";
import { getImages } from "./actions";
import GalleryBoxImage from "./BoxImage";

const mapStateToProps = state => ({
  gallery: state.gallery
});

// const mapDispatchToProps = dispatch => ({
//   getAllImages() {
//     // return dispatch({
//     //   type: GET_IMAGES
//     // });
//     return dispatch(getImages());
//   }
// });

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleryBoxImageIsOpen: false,
      img: null,
      clicker: ""
    };
  }

  componentDidMount() {
    this.props.dispatch(getImages());
  }

  openBoxImage = img => {
    return !this.state.galleryBoxImageIsOpen
      ? this.setState({
          galleryBoxImageIsOpen: true,
          img
        })
      : "";
  };

  closeBoxImageOnMouseLeave = e => {
    if (e.target) {
      return;
    } else {
      console.log("dsfsf");
      this.setState({
        galleryBoxImageIsOpen: false,
        img: null
      });
    }
  };

  render() {
    const { gallery } = this.props;
    const { galleryBoxImageIsOpen, img } = this.state;
    return (
      <div className="gallery">
        <GalleryBoxImage
          isOpen={galleryBoxImageIsOpen}
          img={img}
          closeBoxImageOnMouseLeave={this.closeBoxImageOnMouseLeave}
        />
        {gallery === null ? (
          <div className="spinner" />
        ) : (
          gallery.images.map((image, key) => (
            <GalleryImage
              key={key}
              img={image}
              openBoxImage={img => this.openBoxImage(img)}
            />
          ))
        )}
      </div>
    );
  }
}

export default (Gallery = connect(
  mapStateToProps
  // mapDispatchToProps
)(Gallery));
