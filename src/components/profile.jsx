import React, { Component } from "react";
import { useAuth } from "./auth";

class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Profile page</h4>
                <p>Hello, {this.props.auth.user}</p>
            </React.Fragment>
        );
    }
};

function ProfileInit(props) {
    const auth = useAuth(); 
    return <Profile auth={auth} />
}

export default ProfileInit; 
