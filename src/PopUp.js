import React, { Component } from "react";

export default class PopUp extends Component {
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
     
            <h3>Welcome</h3>
            <div>
              {`${this.props.data.first_name} ${this.props.data.last_name}`}
            </div>
            <div>
              <button className="button" onClick={this.continueToApp}>Continue</button>
            </div>
        </div>
      </div>
    );
  }
}
