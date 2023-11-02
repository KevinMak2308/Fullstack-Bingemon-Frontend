import React from 'react';
import './App.css';
import FrontPage from "./pages/FrontPage"
import ProfilePage from "./pages/ProfilePage"
import SingleMoviePage from "./pages/SingleMoviePage"
import SingleSeriesPage from "./pages/SingleSeriesPage"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage/>}/>
                <Route path="/profilepage" element={<ProfilePage/>}/>
                <Route path="/singlemoviepage" element={<SingleMoviePage/>}/>
                <Route path="/singleseriespage" element={<SingleSeriesPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}
export default App;