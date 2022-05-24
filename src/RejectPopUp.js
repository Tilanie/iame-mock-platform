import React, { Component } from "react";

export default class RejectPopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  continueToApp = () => {
  
    this.props.toggle();
  }

  render() {
     
    return (
      <div className="modal">
        <div className="modal_content">
     
            <h3>Cannot Authenticate</h3>
            
        </div>
      </div>
    );
  }
}
