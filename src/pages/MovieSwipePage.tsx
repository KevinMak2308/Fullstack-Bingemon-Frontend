import React from 'react';
import '../App.css';
import NavBar from "../components/nav/NavBar"
import MovieSwipe from "../components/swipe-feature/MovieSwipe"
import Footer from "../components/nav/Footer"

function MovieSwipePage() {
    return (
        <div>
            <NavBar/>
            <MovieSwipe/>
            <Footer/>
        </div>
    )
}

export default MovieSwipePage;