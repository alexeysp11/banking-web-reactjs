import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class ChangePswdForm extends Component {
    render() {
        // const navigate = useNavigate(); 
        return (
            <React.Fragment>
                <h4>Change password</h4>
                <button onClick={this.handleSubmit} className="btn btn-secondary btn-sm">Submit</button>
                <br />
                <button onClick={() => this.props.navigate(-1)} className="btn btn-secondary btn-sm">Cancel</button>
            </React.Fragment>
        );
    }

    handleSubmit = () => {
        console.log("handleSubmit");
    }
    handleCancel = () => {
        console.log("handleCancel");
    }
};

function WithNavigate(props) {
    let navigate = useNavigate();
    return <ChangePswdForm navigate={navigate} />
}

export default WithNavigate