import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import AngryBirds from './Pages/AngryBirds';
import Blank from './Pages/Blank';
import Collab from './Pages/Collab';
import Customisation from './Pages/Customisation';
import Game from './Pages/Game';
import HarvesterGameLoader from './Pages/HarvesterGameLoader';
import HarvesterGame from './Pages/HarvesterGame';
import Landing from './Pages/Landing';
import Templates from './Pages/Templates';
import VM from './Pages/VM';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />}></Route>
            {/* <Route path='/game' element={<Game />}></Route>
            <Route path='/game/:id' element={<Blank />}></Route> */}
            <Route path='/templates' element={<Templates />} />
            <Route path='/blank' element={<Blank />}></Route>
            <Route path='/custom' element={<Customisation />} />
            <Route path='/collab' element={<Collab />} />
            <Route path='/vm' element={<VM />} />
            <Route path='/bird' element={<AngryBirds />} />
            <Route path='/harvest' element={<HarvesterGameLoader />}></Route>
            <Route path='/harvest/:id' element={<HarvesterGame />} />
        </Routes>
    </BrowserRouter>
);
