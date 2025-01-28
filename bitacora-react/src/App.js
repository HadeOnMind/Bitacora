import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Bitacora from './routerComps/bitacora.js'

import SideBar from './comp/sidebar.js'
import MainTittle from './comp/mainTittle.js'
import TextSection from './comp/BasictextSection.js'
import Footer from './comp/footer.js'
import FeaturedServices from './comp/Featuredservices.js';

import './App.css'




function App() {
  return(
    {/*<BrowserRouter>
    <div>
        <SideBar />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="bitacora" element={<Bitacora />} />
        </Routes>
    </div>
</BrowserRouter>*/},
<BrowserRouter>
    <div id='MainContainer'>
      <div id='SidebarCont'>

          <SideBar />
          <Routes>
          
            <Route path="/" element={<App />} />
            <Route path="bitacora" element={<Bitacora />} />
          </Routes>
         
      </div>
      

  
      <div id='TittleCont'>

        <div id='tittleWrapper'>
          <MainTittle />
        </div>     

        <div>
          <TextSection />
          <FeaturedServices />
          <Footer />
        </div>

      </div>
      
     
    </div>
    </BrowserRouter>
  );
};


export default App;
