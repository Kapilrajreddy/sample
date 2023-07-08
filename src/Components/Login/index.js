import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    loginUser: false,
    showSubmitError: false,
    errorMsg: "",
    userBlur: "",
    passwordBlur: "",
    redirectToRegister: false, // New state property for redirection
  };

  handleRegisterClick = () => {
    this.setState({ redirectToRegister: true });
  };

  render() {
    const {
      userBlur,
      passwordBlur,
      redirectToRegister,
    } = this.state;
    if (redirectToRegister) {
      return <Navigate to="/signup" />;
    }

    return (
      <div className="login-body">
        <div className="login-box" id="sectionBox">
          <form className="login-form">
            <div className="logo-container">
              <img src="https://www.sar-group.com/assets/frontend/images/sargroup_logo.png" alt="logo" />
            </div>
            <h2 className="login-caption">Please Login to Your Account</h2>
            <div className="login-user-container">
              <input type="text" className="login-input" placeholder="Email" />
              <p className="blur">{userBlur}</p>
            </div>
            <div className="login-user-container">
              <input type="password" className="login-input" placeholder="Password" />
              <p className="blur">{passwordBlur}</p>
            </div>
            <input type="submit" className="login-button" value="Login" id="loginbutton" />
            <p className="forgot-password">Forgot Password?</p>
            <p className="dont-have-account">
              Don't have an account? <Link to='/signup'><span className="register-here" onClick={this.handleRegisterClick}>Register here</span></Link>
                
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
