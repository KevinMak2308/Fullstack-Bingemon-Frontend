import React from 'react';
import '../App.css';
import NavBar from "../components/NavBar"
import FrontPageFirstSection from "../components/FrontPageFirstSection"
import FrontPageSecondSection from "../components/FrontPageSecondSection"
import FrontPageThirdSection from "../components/FrontPageThirdSection"
import Footer from "../components/Footer"

function FrontPage() {

    return (
        <div>
            <NavBar/>
            <FrontPageFirstSection/>
            <FrontPageSecondSection/>
            <FrontPageThirdSection/>
            <Footer/>
        </div>

    )

}

export default FrontPage;