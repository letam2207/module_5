// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import các component bạn đã tạo (đảm bảo đường dẫn đúng)
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import ListComponent from './component/ListComponent';
import PlayerForm from './component/PlayerForm';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="container" style={{ minHeight: '80vh', marginTop: '20px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/players" element={<ListComponent />} />
                    <Route path="/players/create" element={<PlayerForm />} />
                    <Route path="/players/edit/:id" element={<PlayerForm />} />
                </Routes>
            </div>
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
        </BrowserRouter>
    );
}

export default App;