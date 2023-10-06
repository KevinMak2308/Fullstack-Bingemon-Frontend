import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import SubNav from "./components/SubNav"
import SignupModal from "./components/SignupModal"

function App() {
    return (
        <div className="App">
            <NavBar/>
            <SubNav/>
            <SignupModal/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Our Frontend Typescript React Project for Bingemon - Delta Group
                </a>
            </header>
        </div>
    );
}

export default App;