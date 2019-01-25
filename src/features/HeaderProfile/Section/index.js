import React from "react";

const Section = ({ user, params }) => {
  const { username, fullname, description } = user;
  return (
    <div className="section">
      <div className="username">
        {<h3>{params.user}</h3>}
        {username === params.user ? (
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
  );
};

export default Section;
