import React from "react";

const Image = ({ marginRight, img, openModalWindow }) => {
  return (
    <div className="card" style={{ marginRight }}>
      <div className="cover" onClick={openModalWindow} />
      {img ? <img src={img} alt="" /> : ""}
    </div>
  );
};

export default Image;
