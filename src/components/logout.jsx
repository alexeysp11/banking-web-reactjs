import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

class LogoutForm extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Are you sure to log out? </h4>
                <button onClick={this.handleLogoutBtn} className="btn btn-secondary btn-sm">Yes</button>
                <button onClick={this.handleCancelBtn} className="btn btn-secondary btn-sm">No</button>
            </React.Fragment>
        );
    }

    handleLogoutBtn = () => {
        this.props.auth.logout(); 
        this.props.navigate('/'); 
    }
    handleCancelBtn = () => {
        this.props.navigate(-1); 
    }
};

function LogoutFormWithNav(props) {
    const auth = useAuth(); 
    let navigate = useNavigate();
    return <LogoutForm navigate={navigate} auth={auth} />
}

export default LogoutFormWithNav; 
