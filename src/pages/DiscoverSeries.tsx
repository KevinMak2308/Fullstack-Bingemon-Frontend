import React from 'react';
import '../App.css';
import NavBar from "../components/NavBar"
import DiscoverSeriesMain from "../components/discoverseries/DiscoverSeriesMain"
import Footer from "../components/Footer"

function Discover() {

    return (
        <div>
            <NavBar/>
            <DiscoverSeriesMain/>
            <Footer/>
        </div>

    )

}

export default Discover;