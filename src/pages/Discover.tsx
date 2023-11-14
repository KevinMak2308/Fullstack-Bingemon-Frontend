import React from 'react';
import '../App.css';
import NavBar from "../components/NavBar"
import DiscoverAllSections from "../components/discover/DiscoverAllSections"
import Footer from "../components/Footer"

function Discover() {

    return (
        <div>
            <NavBar/>
            <DiscoverAllSections/>
            <Footer/>
        </div>

    )

}

export default Discover;