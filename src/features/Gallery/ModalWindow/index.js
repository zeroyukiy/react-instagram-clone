import React, { Component } from "react";

export default class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
    console.log("box image unmounted");
  }

  handleOutsideClick = e => {
    if (this.node.current === e.target) {
      this.props.closeModalWindowOnMouseClick(e);
    }
    return;
  };

  render() {
    const { img } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="overlay" ref={this.node} />
        <div className="box-image" onClick={this.handleOutsideClick}>
          <div className="content-image">
            <img src={img} alt="something here" />
          </div>
          <div className="comments">
            <div className="author">
              <div className="avatar">
                <img
                  src="https://f4.bcbits.com/img/0010186131_10.jpg"
                  alt="avatar"
                />
              </div>
              <div className="info">
                <h2 className="username">sdfdffghtr</h2>
              </div>
              <span className="separator">●</span>
              <div className="follow">
                <a href="https://dfds.com">Follow</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
