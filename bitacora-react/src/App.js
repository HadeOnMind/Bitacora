import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './comp/sidebar.js';
import MainTittle from './comp/mainTittle.js';
import TextSection from './comp/BasictextSection.js';
import Footer from './comp/footer.js';
import FeaturedServices from './comp/Featuredservices.js';
import Bitacora from './routerComps/bitacora';
import Documentation from './routerComps/documentation';
import './App.css';

function App() {
  return (
    <Router>
      <div id='MainContainer'>
        <div id='SidebarCont'>
          <SideBar />
        </div>

        <div id='TittleCont'>
          <div id='tittleWrapper'>
            <MainTittle />
          </div>

          <div>
            <Routes>
              <Route path="/Bitacora" element={<Bitacora />} />
              <Route path="/Documentation" element={<Documentation />} />
              <Route path="/" element={<div>Home Page</div>} /> {/* Add a home route */}
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>

            <TextSection />
            <FeaturedServices />
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

