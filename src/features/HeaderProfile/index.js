import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderProfileAvatar from "./Avatar";
import HeaderProfileSection from "./Section";

const mapStateToProps = state => ({
  auth: state.auth
});

class HeaderProfile extends Component {
  render() {
    const { params } = this.props;
    return (
      <div className="header">
        <HeaderProfileAvatar avatar={this.props.auth.user.avatar} />
        <HeaderProfileSection user={this.props.auth.user} params={params} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(HeaderProfile);
