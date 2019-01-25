import React from "react";
import PropTypes from "prop-types";
import Gallery from "../features/Gallery";
import HeaderProfile from "../features/HeaderProfile";

const ProfilePage = ({ params }) => {
  return (
    <>
      <HeaderProfile params={params} />
      <Gallery />
    </>
  );
};

ProfilePage.propTypes = {
  params: PropTypes.object.isRequired
}

export default ProfilePage;
