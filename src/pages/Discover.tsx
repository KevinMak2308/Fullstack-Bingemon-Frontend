import React from 'react';
import '../App.css';
import NavBar from "../components/nav/NavBar"
import DiscoverMovies from "../components/discover/DiscoverMovies"
import Footer from "../components/nav/Footer"

function Discover() {
    console.log("HOWDY")
    return (
        <div>
            <NavBar/>
            <DiscoverMovies/>
            <Footer/>
        </div>
    )
}

export default Discover;