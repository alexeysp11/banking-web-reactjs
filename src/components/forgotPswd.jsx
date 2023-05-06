import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class ForgotPswd extends Component {
    render() {
        return (
            <>
                <h1>Forgot password</h1>
                <div>
                    <p>Phone number: </p>
                    <div>
                        <input type="tel" className="" />
                        <button className="btn btn-secondary btn-sm">Send code</button>
                    </div>

                    <p>We'll send SMS with code to your phone number.</p>
                </div>
                <div>
                    <p>Code: </p>
                    <input type="text" />
                </div>
                <button onClick={this.handleSubmit} className="btn btn-secondary btn-sm">Submit</button>
            </>
        ); 
    }

    handleSubmit = () => {
        console.log('reset password'); 
        this.props.navigate('/');
    }
}; 

function ForgotPswdInit(props) {
    let navigate = useNavigate();
    return <ForgotPswd navigate={navigate} />
}

export default ForgotPswdInit; 
