import React, { Component } from "react";

export default class BoxImage extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  // componentDidMount() {
  //   document.addEventListener("click", this.handleOutsideClick);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener("click", this.handleOutsideClick);
  // }

  // handleOutsideClick = e => {
  //   if(e && this.node.current === e.target) {
  //     return;
  //   }
  //   this.props.closeBoxImageOnMouseLeave()
  // };

  render() {
    const { isOpen, img, closeBoxImageOnMouseLeave } = this.props;
    return isOpen ? (
      <>
        <div className="overlay">
          <div className="box-image" onClick={e => closeBoxImageOnMouseLeave(e)} ref={this.node}>
            <div className="content-image">
              <img src={img} alt="something here" />
            </div>
            <div className="comments">ds</div>
          </div>
        </div>
      </>
    ) : (
      <div style={{ display: "none" }} />
    );
  }
}

// const BoxImage = ({ isOpen, img, closeBoxImageOnMouseLeave }) => {
//   return isOpen ? (
//     <>
//       <div className="overlay">
//         {/* <div className="box-image" onMouseLeave={closeBoxImageOnMouseLeave} > */}
//         <div className="box-image" onClick={closeBoxImageOnMouseLeave} >
//           <div className="content-image">
//             <img src={img} alt="something here" />
//           </div>
//           <div className="comments">ds</div>
//         </div>
//       </div>
//     </>
//   ) : (
//     <div style={{ display: "none" }} />
//   );
// };

// export default BoxImage;
