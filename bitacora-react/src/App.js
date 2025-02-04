import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './Components/SideBar/sidebar.js';
import Bitacora from './MainApp/bitacora.js';
import Documentation from './MainApp/documentation.js';
import Home from './MainApp/home.js';
import Profile from './MainApp/profile.js'; 
import WIPPage from './Components/Wip/WIP.js';
import './App.css'


function App() {
  return (
    <Router>
      <div id='MainContainer'>
        <div id='SidebarCont'>
          <SideBar />
        </div>

        <div id='TittleCont'>
        
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Bitacora/*" element={<Bitacora />} />
              <Route path="/Documentation" element={<Documentation />} />
              <Route path="/WIP" element={<WIPPage />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </div>
          
        </div>
      </div>
    </Router>
  );
}

export default App;

