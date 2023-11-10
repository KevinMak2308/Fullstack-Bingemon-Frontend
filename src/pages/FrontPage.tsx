import React from 'react';
import '../App.css';
import NavBar from "../components/NavBar"
import FrontPageFirstSection from "../components/FrontPageFirstSection"
import FrontPageSecondSection from "../components/FrontPageSecondSection"
import FrontPageThirdSection from "../components/FrontPageThirdSection"
import Footer from "../components/Footer"
import hero from "../hero.png";
import {
    Box,
} from '@chakra-ui/react';

function FrontPage() {

    return (
        <div>
        <Box style={{ backgroundImage: `url(${hero})` }}
             backgroundSize="cover"
             backgroundRepeat="no-repeat"
             backgroundPosition={{ base: 'right', md: 'center', lg: 'center' }}>
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