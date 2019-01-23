import React from "react";
import PropTypes from "prop-types";

const Image = ({ marginRight, img, openModalWindow }) => {
  return (
    <div className="card" style={{ marginRight }}>
      <div className="cover" onClick={openModalWindow} />
      {img ? <img src={img} alt="" /> : ""}
    </div>
  );
};

Image.propTypes = {
  marginRight: PropTypes.number,
  img: PropTypes.string,
  openModalWindow: PropTypes.func
};

export default Image;
