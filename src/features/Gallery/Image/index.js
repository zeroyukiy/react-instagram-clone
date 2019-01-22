import React from "react";

const GalleryImage = ({ marginRight, img }) => {
  return (
    <div className="card" style={{ marginRight }}>
      {img ? <img src={img} alt="" /> : ""}
    </div>
  );
};

export default GalleryImage;
