import React, { Component } from "react";
import Gallery from "../Gallery";
// import PropTypes from "prop-types";
import { getUser } from "./api";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        fullname: "",
        email: "",
        avatar: "",
        description: ""
      }
    };
  }

  fetchData = async () => {
    const user = await getUser(this.props.params.user);
    if (user) {
      this.setState({
        user: user.data
      });
    }
  };

  componentWillMount() {
    console.log("mount");
    this.fetchData();
  }

  componentWillUnmount() {
    console.log("unmount");
    this.setState({
      user: {}
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.user !== prevProps.params.user) {
      console.log("yep");
      this.fetchData();
    }
  }

  render() {
    const { avatar, username, description, fullname } = this.state.user;
    // const { params } = this.props;
    return (
      <main>
        <div className="header">
          <div className="left-header">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
          </div>
          <div className="section">
            <div className="username">
              {<h3>{username}</h3>}
              {username === this.props.auth.user.username ? (
                <button className="btn btn-primary">Edit Profile</button>
              ) : (
                <>
                  <button className="btn btn-primary">Follow</button>
                  <button className="btn btn-primary">
                    <i className="fas fa-arrow-down" />
                  </button>
                </>
              )}
            </div>
            <ul className="stats">
              <li className="posts">
                <strong>23</strong> posts
              </li>
              <li className="followers">
                <strong>141</strong> followers
              </li>
              <li className="following">
                <strong>15</strong> following
              </li>
            </ul>
            <div className="info">
              <p>
                <span role="img" aria-label="Panda">
                  🐼
                </span>
                <span role="img" aria-label="Panda">
                  🐼
                </span>
                <span role="img" aria-label="Panda">
                  🐼
                </span>
                <span role="img" aria-label="Panda">
                  🐼
                </span>
                <span style={{ marginLeft: 10 }}>
                  <a href="https://">walker.afrika.com/user/dsa</a>
                </span>
              </p>
              <p>{fullname}</p>
              <p>
                {description}
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                id luctus metus. Donec hendrerit ultricies nisl, sed aliquet ex
                laoreet eu. Cras vulputate in nibh eleifend vehicula. Pellentesque
                blandit vel. */}
              </p>
            </div>
          </div>
        </div>
        {/* <div className="menu">menu</div> */}
        <Gallery />
      </main>
    );
  }
}

// Profile.propTypes = {
//   auth: PropTypes.object
// };

export default Profile;
