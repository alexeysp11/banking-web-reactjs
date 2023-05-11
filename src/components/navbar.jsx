import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

class Navbar extends Component {
    render() {
        if (this.isAuthenticated()) return this.renderAuthenticated(); 
        return this.renderNonAuthenticated(); 
    }

    isAuthenticated() {
        // Send request to the server to determine if a user is authenticated.
        // Note: timeout could be taken into account as well
        return this.props.auth.user; 
    }

    renderAuthenticated() {
        return (
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About us</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/atmsbranches'>ATMs & Branches</NavLink>
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
                <NavLink to='/about'>About us</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/atmsbranches'>ATMs & Branches</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
        ); 
    }
};

function NavbarInit(props) {
    const auth = useAuth(); 
    return <Navbar auth={auth} />
}

export default NavbarInit; 

