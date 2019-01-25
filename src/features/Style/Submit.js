import React from "react";

const Submit = ({ value }) => {
  return (
    <div className="input-style">
      <input className="btn btn-primary btn-lg" type="submit" value={value} />
    </div>
  );
};

export default Submit;
