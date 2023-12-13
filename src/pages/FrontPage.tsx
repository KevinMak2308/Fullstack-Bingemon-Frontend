import React from 'react';
import '../App.css';
import NavBar from "../components/nav/NavBar"
import FrontPageFirstSection from "../components/frontPage/FrontPageFirstSection"
import FrontPageSecondSection from "../components/frontPage/FrontPageSecondSection"
import FrontPageThirdSection from "../components/frontPage/FrontPageThirdSection"
import Footer from "../components/nav/Footer"
import hero from "../hero.png";
import {Box,} from '@chakra-ui/react';

function FrontPage() {
    return (
        <div>
            <Box style={{backgroundImage: `url(${hero})`}}
                 backgroundSize="cover"
                 backgroundRepeat="no-repeat"
                 backgroundPosition={{base: 'right', md: 'center', lg: 'center'}}>
                <NavBar/>
                <FrontPageFirstSection/>
            </Box>
            <FrontPageSecondSection/>
            <FrontPageThirdSection/>
            <Footer/>
        </div>
    )
}

export default FrontPage;