import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import AngryBirds from './Pages/AngryBirds';
import Landing from './Pages/Landing';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/angry-birds' element={<AngryBirds />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);