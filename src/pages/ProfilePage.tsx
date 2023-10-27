import '../App.css';
import NavBar from "../components/NavBar"
import ProfileInfo from "../components/ProfileInfo"
import ProfileCards from "../components/ProfileCards"
import ProfileRectangles from "../components/ProfileRectangles"
import Footer from "../components/Footer"
import React from 'react';

function ProfilePage() {


return (

    <div>
    <NavBar/>
    <ProfileInfo/>
        <ProfileCards/>
        <ProfileRectangles/>
        <Footer/>
    </div>
)
}

export default ProfilePage;