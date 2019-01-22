import React from "react";
import Gallery from "../features/Gallery";

const Main = () => {
  return (
    <main>
      <div className="header">
        <div className="left-header">
          <div className="avatar">
            <img src="https://f4.bcbits.com/img/0010186131_10.jpg" alt="" />
          </div>
        </div>
        <div className="section">
          <div className="username">
            <h3>Test123456</h3>
            <button className="btn btn-primary">Follow</button>
            <button className="btn btn-primary">
              <i className="fas fa-arrow-down" />
            </button>
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
              <span style={{marginLeft: 10}}><a href="https://">walker.afrika.com/user/dsa</a></span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              id luctus metus. Donec hendrerit ultricies nisl, sed aliquet ex
              laoreet eu. Cras vulputate in nibh eleifend vehicula. Pellentesque
              blandit vel.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="menu">menu</div> */}
      <Gallery />
    </main>
  );
};

export default Main;
