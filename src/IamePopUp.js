import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import pic from "./assets/ppi.png";

export default class IamePopUp extends Component {
  handleClick = () => {
    this.props.handle();
  };
  continueToApp = () => {
  
    this.props.toggle();
  }

  render() {
     
    return (
      <div className="modal">
        <div className="modal_content">
        {this.props.fetchingData ? (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        )
            : (<form>
                <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
            
                </div>
                <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
            
                </div>
            </form>)
        }
        
            <div>
            <img id="image-id" src={pic} />
              <button className="button" onClick={this.handleClick}>Continue</button>
            </div>
        </div>
      </div>
    );
  }
}
