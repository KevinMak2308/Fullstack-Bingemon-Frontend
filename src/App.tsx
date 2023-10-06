import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import SubNav from "./components/SubNav"
import SignupModal from "./components/SignupModal"
import FrontPageFirstSection from "./components/FrontPageFirstSection"
import FrontPageSecondSection from "./components/FrontPageSecondSection"
import FrontPageThirdSection from "./components/FrontPageThirdSection"

function App() {
    return (
        <div className="">
            <NavBar/>
            <SubNav/>
            <SignupModal/>
            <FrontPageFirstSection/>
            <FrontPageSecondSection/>
            <FrontPageThirdSection/>
        </div>
    );
}

export default App;