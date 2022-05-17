import React, { Component } from "react";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };


  render() {
    function continueToApp(){

    }
    return (
      <div className="modal">
        <div className="modal_content">
     
          <form>
            <h3>Welcome</h3>
            {`${this.props.data.first_name} ${this.props.data.last_name}`}
      
            <button className="button" onClick={continueToApp}>Continue</button>
          </form>
        </div>
      </div>
    );
  }
}
