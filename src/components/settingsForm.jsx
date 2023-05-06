import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class SettingsForm extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Settings</h4>
                <button onClick={() => this.props.navigate('/changepswd')} className="btn btn-secondary btn-sm">Change password</button>
                <br />
                <button onClick={() => this.props.navigate('/logout')} className="btn btn-secondary btn-sm">Logout</button>
            </React.Fragment>
        );
    }
};

function SettingsFormInit(props) {
    let navigate = useNavigate();
    return <SettingsForm navigate={navigate} />
}

export default SettingsFormInit; 
