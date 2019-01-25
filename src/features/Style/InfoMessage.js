import React from "react";
import { Redirect } from "react-router-dom";

const InfoMessage = ({ loading, username }) => {
  return (
    <div className="info-message">
      {loading ? (
        <h4>Loading ..</h4>
      ) : username ? (
        <Redirect to="/" />
      ) : (
        <h4>Info</h4>
      )}
    </div>
  );
};

export default InfoMessage;
