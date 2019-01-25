import React from "react";

const Avatar = ({ avatar }) => {
  return (
    <div className="left-header">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Avatar;
