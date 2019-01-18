import React, { Component } from "react";
import GalleryImage from "./Image";

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <GalleryImage />
        <GalleryImage />
        <GalleryImage marginRight={0}/>
      </div>
    );
  }
}
