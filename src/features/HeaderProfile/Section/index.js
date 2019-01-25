import React from "react";

const Section = ({ auth, profile, params }) => {
  const { username, fullname, description, stats } = profile;
  const currentUser = auth.user.username;
  return (
    <div className="section">
      <div className="username">
        {<h3>{params.user}</h3>}
        {username === currentUser ? (
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
          <strong>{stats.posts}</strong> posts
        </li>
        <li className="followers">
          <strong>{stats.followers}</strong> followers
        </li>
        <li className="following">
          <strong>{stats.following}</strong> following
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
            <a href="https://">myprofile.example.test/user/123</a>
          </span>
        </p>
        <p>{fullname}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Section;
