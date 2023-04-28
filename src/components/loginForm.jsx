import React, { Component } from "react";

class LoginForm extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Welcome to the Banking Web App</h4>
                <div>
                    <p>Login: </p>
                    <input type="text" className="" />
                </div>
                <div>
                    <p>Password: </p>
                    <input type="password" className="" />
                </div>
                <button onClick={this.handleLogin} className="btn btn-secondary btn-sm">Login</button>
                <button onClick={this.handleForgotPassword} className="btn btn-secondary btn-sm">Forgot password</button>
            </React.Fragment>
        );
    }

    handleLogin = () => {
        console.log("handleLogin");
    }
    handleForgotPassword = () => {
        console.log("handleForgotPassword");
    }
};

export default LoginForm; 
