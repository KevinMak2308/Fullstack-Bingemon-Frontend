import React from 'react';
import '../App.css';
import NavBar from "../components/NavBar"
import DiscoverMovies from "../components/discover/DiscoverMovies"
import Footer from "../components/Footer"

function Discover() {

    return (
        <div>
            <NavBar/>
            <DiscoverMovies/>
            <Footer/>
        </div>

    )

}

export default Discover;