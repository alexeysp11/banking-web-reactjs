import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

class LoginForm extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Welcome to the Banking Web App</h4>
                <div>
                    <p>Login: </p>
                    <input type="text" onChange={(e) => this.props.setUser(e.target.value)} />
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
        this.props.auth.login(this.props.user); 
        this.props.navigate('/profile', {replace: true}); 
    }
    handleForgotPassword = () => {
        this.props.navigate('/forgotpswd'); 
    }
};

function LoginFormInit(props) {
    const [user, setUser] = useState(''); 
    const auth = useAuth(); 
    let navigate = useNavigate();
    return <LoginForm navigate={navigate} auth={auth} user={user} setUser={setUser} />
}

export default LoginFormInit; 
