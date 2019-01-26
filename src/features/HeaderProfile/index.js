import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderProfileAvatar from "./Avatar";
import HeaderProfileSection from "./Section";
import { addInfoProfile, addInfoProfileCurrentUser } from "./actions";

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

class HeaderProfile extends Component {
  componentDidMount() {
    this.props.params.user === this.props.auth.user.username
      ? this.props.dispatch(addInfoProfileCurrentUser(this.props.auth.user))
      : this.props.dispatch(addInfoProfile());
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props.params;
    if (prevProps.params.user !== user) {
      this.props.params.user === this.props.auth.user.username
      ? this.props.dispatch(addInfoProfileCurrentUser(this.props.auth.user))
      : prevProps.dispatch(addInfoProfile());
    }
  }

  render() {
    const { params } = this.props;
    const { profile, auth } = this.props;
    return (
      <div className="header">
        <HeaderProfileAvatar avatar={profile.avatar} />
        {profile.isLoading ? (
          <div className="spinner" />
        ) : (
          <>
            <HeaderProfileSection
              auth={auth}
              profile={profile}
              params={params}
            />
          </>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(HeaderProfile);
