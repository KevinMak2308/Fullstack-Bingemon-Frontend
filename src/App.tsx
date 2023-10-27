import React from 'react';
import './App.css';
import FrontPage from "./pages/FrontPage"
import ProfilePage from "./pages/ProfilePage"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage/>}/>
                <Route path="/profilepage" element={<ProfilePage/>}/>
            </Routes>
        </BrowserRouter>

    )
}
export default App;