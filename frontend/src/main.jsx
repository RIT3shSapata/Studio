import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Blank from './Pages/Blank';
import Customisation from './Pages/Customisation';
import Game from './Pages/Game';
import Landing from './Pages/Landing';
import Templates from './Pages/Templates';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/game" element={<Game />}></Route>
            <Route path="/templates" element={<Templates />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/custom" element={<Customisation />} />
        </Routes>
    </BrowserRouter>
);