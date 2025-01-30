import React, { useState } from "react";
import '../CompStyles/styles.css'






export default function Bitacora () {


    return (
        <div className="app">
          {/* Main Content (Book and other elements) */}
          <div className="main-content">
            {/* Header (optional) */}
            <header className="header">
              <h1>My Bitácora</h1>
              <p>Document your journey with text, images, and drawings.</p>
            </header>
    
            {/* Book Container */}
            <div className="book">
              {/* Left Page */}
              <div className="page left-page">
                <h2>Page Title</h2>
                <p>Description of the subject...</p>
                <img src="example.jpg" alt="Example" />
              </div>
    
              {/* Right Page */}
              <div className="page right-page">
                <h2>Page Title</h2>
                <p>Description of the subject...</p>
                <img src="example.jpg" alt="Example" />
              </div>
    
              {/* Navigation Buttons */}
              <button className="nav-button prev-button">Previous</button>
              <button className="nav-button next-button">Next</button>
            </div>
    
            {/* Footer (optional) */}
            <footer id="footer-section" className="footer">
              <p>© 2023 My Bitácora. All rights reserved.</p>
            </footer>
          </div>
        </div>
      );
    };