import React from "react";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              id luctus metus. Donec hendrerit ultricies nisl, sed aliquet ex
              laoreet eu. Cras vulputate in nibh eleifend vehicula. Pellentesque
              blandit vel.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="menu">menu</div> */}
      <div className="gallery">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card aa"></div>
      </div>
    </main>
  );
};

export default Main;
