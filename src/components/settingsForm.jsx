import React, { Component } from "react";

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
        console.log("handleLogout");
    }
};

export default SettingsForm; 
