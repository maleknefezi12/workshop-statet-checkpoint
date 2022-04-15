import React, { Component } from "react";
import ImgSrc from './hunter.jpg';


 class Hunter extends Component {
  state = { fullname: "Malek Nefzi ", bio:"learn react-js", profession:"young developer", image: ImgSrc, show: false, count: 0 };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  
  handleShow = () => {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
      this.setState({ count: 0 });
      this.setState({ show: true });
    }
  };
  
render() {
  return (
    <div>
    
      {this.state.show && (
        <div>
          <h1>{this.state.fullname}</h1>
          <h1>{this.state.bio}</h1>
          <img src={this.state.image} />
          <h1>{this.state.profession}</h1>
          <h1>{this.state.count}</h1>
        </div>
      )}
      <button onClick={this.handleShow}>show information</button>
    </div>
     );
    }
  }
  export default Hunter;