import React from "react";




export default function BookMain() {


return (
    <div className="app">
      <div className="main-content">

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
      </div>
    </div>
  );
};