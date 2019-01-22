import React, { Component } from "react";
import GalleryImage from "./Image";
import { connect } from "react-redux";
// import { GET_IMAGES } from "./actionTypes";
import { getImages } from "./actions";

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
  componentDidMount() {
    this.props.dispatch(getImages());
  }

  render() {
    const { gallery } = this.props;
    return (
      <div className="gallery">
        {gallery === null ? (
          <div className="spinner" />
        ) : (
          gallery.images.map((image, key) => 
            <GalleryImage key={key} img={image} />
          )
        )}
      </div>
    );
  }
}

export default (Gallery = connect(
  mapStateToProps
  // mapDispatchToProps
)(Gallery));
