import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class SettingsForm extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Settings</h4>
                <a href="/changepswd">
                    <button onClick={this.handleChangePassword} className="btn btn-secondary btn-sm">Change password</button>
                </a>
                <br />
                <button onClick={this.handleLogout} className="btn btn-secondary btn-sm">Logout</button>
            </React.Fragment>
        );
    }

    handleChangePassword = () => {
        console.log("handleChangePassword");
    }
    handleLogout = () => {
        this.props.navigate('/logout'); 
    }
};

function SettingsFormInit(props) {
    let navigate = useNavigate();
    return <SettingsForm navigate={navigate} />
}

export default SettingsFormInit; 
