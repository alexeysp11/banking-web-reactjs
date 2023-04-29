import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import LoginForm from './components/loginForm';
import SettingsForm from './components/settingsForm';
import ChangePswdForm from './components/changePswdForm';
import Profile from './components/profile';
import Navbar from './components/navbar';
import Logout from './components/logout';
import NoMatch from './components/noMatch';
import { AuthProvider } from "./components/auth";
import './App.css';

function App() {
    return (
        <React.Fragment>
            <AuthProvider>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/about' element={<Home />}></Route>
                    <Route path='/login' element={<LoginForm />}></Route>
                    <Route path='/settings' element={<SettingsForm />}></Route>
                    <Route path='/profile' element={<Profile />}></Route>
                    <Route path='/changepswd' element={<ChangePswdForm />}></Route>
                    <Route path='/logout' element={<Logout />}></Route>
                    <Route path='/*' element={<NoMatch />}></Route>
                </Routes>
            </AuthProvider>
        </React.Fragment>
    );
}

export default App;
