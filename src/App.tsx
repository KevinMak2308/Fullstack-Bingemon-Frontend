import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import NavBarLoggedIn from "./components/NavBarLoggedIn"
import SubNav from "./components/SubNav"
import SubNavLoggedIn from "./components/SubNavLoggedIn"
import SignupModal from "./components/SignupModal"

function App() {

    if (localStorage.getItem("user")) {
        return (
        <div className="App">
            <NavBarLoggedIn/>
            <SubNavLoggedIn/>
        </div>
        );
    }

    else {
        return (
        <div>
            <NavBar/>
            <SubNav/>
        </div>
        );
    }
}
export default App;