import React, { useState } from "react";
import ReactDOM from "react-dom";
import PopUp from "./PopUp"; 

import "./styles.css";

function App() {
  
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  async function loginUsingIame() {
    var targetUrl ='http://127.0.0.1:5000/get_credentials'
        const res= await fetch(targetUrl,{
            method: 'POST',
            headers: {
                        'Content-Type': "application/json; charset=utf-8",
            },
            body: JSON.stringify({

              
                "application_name": "Cool App",
                "application_id": "123"
            
            })
        })
        .then(response => response.json())
        .catch(error =>{
                return {
                  authenticated: false
                }
                console.log(error)
            })
        
        return {
          authenticated: true,
          authData: res
        }
  }

  async function login(){
    var response = await loginUsingIame()
   
    if(response.authenticated){
      console.log(response.authData)
      setUserInformation(response.authData)
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }

  function toggleContinue() {
    setIsSubmitted(true)
    setIsAuthenticated(false)
   };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
      
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
       
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="button-container">
          <button className="button" onClick={login}>Login using <b>iame</b></button>
        </div>
      </form>
      
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Mock System</div>
        {isSubmitted ? 
        <div>
          User is successfully logged in
          <div className="user-information">
            <div className="user-info">
              <b>Name:</b>{` ${userInformation.first_name} ${userInformation.last_name}`}
            </div>
            <div className="user-info">
            <b>Age:</b>{` ${userInformation.age}`}
            </div>
            <div className="user-info">
              <b>Date of Birth:</b>{` ${userInformation.dob}`}
            </div>
            <div className="user-info">
              <b>Email:</b>{` ${userInformation.email}`}
            </div>
            <div className="user-info">
              <b>Phone Number:</b>{` ${userInformation.phone_number}`}
            </div>
            <div className="user-info">
              <b>Gender:</b>{` ${userInformation.gender}`}
            </div>
          </div>
        </div>
        
        : renderForm}
      </div>
      {isAuthenticated? <PopUp data={userInformation}   toggle={toggleContinue} />: null}
    </div>
  );
}

export default App;