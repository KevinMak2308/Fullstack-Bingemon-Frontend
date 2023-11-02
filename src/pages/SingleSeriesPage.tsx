import React from 'react';
import '../App.css';
import NavBar from "../components/NavBar"
import SingleSeriesFirstSection from "../components/SingleSeriesFirstSection"
import SingleSeriesSecondSection from "../components/SingleSeriesSecondSection"
import SingleSeriesThirdSection from "../components/SingleSeriesThirdSection"
import SingleSeriesFourthSection from "../components/SingleSeriesFourthSection"
import SingleSeriesFifthSection from "../components/SingleSeriesFifthSection"
import SingleSeriesSixthSection from "../components/SingleSeriesSixthSection"
import Footer from "../components/Footer"

function SingleSeriesPage() {

    return (
        <div>
            <NavBar/>
            <SingleSeriesFirstSection/>
            <SingleSeriesSecondSection/>
            <SingleSeriesThirdSection/>
            <SingleSeriesFourthSection/>
            <SingleSeriesFifthSection/>
            <SingleSeriesSixthSection/>
            <Footer/>
        </div>

    )

}

export default SingleSeriesPage;