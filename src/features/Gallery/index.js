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
    // this.props.getAllImages();
    this.props.dispatch(getImages());
  }

  render() {
    return (
      <div className="gallery">
        {this.props.gallery === null ? (
          <div className="spinner" />
        ) : (
          <>
            <GalleryImage />
            <GalleryImage />
            <GalleryImage marginRight={0} />
          </>
        )}
      </div>
    );
  }
}

export default (Gallery = connect(
  mapStateToProps
  // mapDispatchToProps
)(Gallery));
