import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        if (this.isAuthenticated()) return this.renderAuthenticated(); 
        return this.renderNonAuthenticated(); 
    }

    isAuthenticated() {
        // Send request to the server to determine if a user is authenticated.
        // Note: timeout should be taken into account as well
        return true; 
    }

    renderAuthenticated() {
        return (
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/settings'>Settings</NavLink>
                <NavLink to='/logout'>Logout</NavLink>
            </nav>
        ); 
    }
    renderNonAuthenticated() {
        return (
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
        ); 
    }
};

export default Navbar; 
