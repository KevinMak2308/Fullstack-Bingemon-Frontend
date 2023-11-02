import React from 'react';
import '../App.css';
import NavBar from "../components/NavBar"
import SingleMovieFirstSection from "../components/SingleMovieFirstSection"
import SingleMovieSecondSection from "../components/SingleMovieSecondSection"
import SingleMovieThirdSection from "../components/SingleMovieThirdSection"
import SingleMovieFourthSection from "../components/SingleMovieFourthSection"
import SingleMovieFifthSection from "../components/SingleMovieFifthSection"
import Footer from "../components/Footer"

function SingleMoviePage() {

    return (
        <div>
            <NavBar/>
            <SingleMovieFirstSection/>
            <SingleMovieSecondSection/>
            <SingleMovieThirdSection/>
            <SingleMovieFourthSection/>
            <SingleMovieFifthSection/>
            <Footer/>
        </div>

    )

}

export default SingleMoviePage;