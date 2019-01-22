import React from "react";

const Image = ({ marginRight, img, openBoxImage }) => {
  return (
    <div className="card" style={{ marginRight }}>
      <div className="cover" onClick={() => openBoxImage(img)} />
      {img ? <img src={img} alt="" /> : ""}
    </div>
  );
};

export default Image;