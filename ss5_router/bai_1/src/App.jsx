import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HeaderComponent from './component/HeaderComponent.jsx';
import FooterComponent from './component/FooterComponent.jsx';
import HomeComponent from './component/HomeComponent.jsx';
import ListComponent from './component/ListComponent';
import PlayerFormComponent from './component/PlayerFormComponent.jsx';
import LoginComponent from './component/LoginComponent.jsx';

function App() {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <div className="container" style={{ minHeight: '80vh', marginTop: '20px' }}>
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/players" element={<ListComponent />} />
                    <Route path="/players/create" element={<PlayerFormComponent />} />
                    <Route path="/players/edit/:id" element={<PlayerFormComponent />} />

                    <Route path="/login" element={<LoginComponent />} />
                </Routes>
            </div>
            <FooterComponent />
            <ToastContainer position="top-right" autoClose={3000} />
        </BrowserRouter>
    );
}

export default App;