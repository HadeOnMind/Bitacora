// BookNavbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/book.css"; // Import the CSS file

export default function BookNavbar() {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="navbar">
      
      <button className="navbar-button" onClick={handleGoBack}>
        ← Go Back
      </button>

      <div className="navbar-placeholders">
        <button className="navbar-button">💾 Save</button>
        <button className="navbar-button">⚙️ Settings</button>
        <button className="navbar-button">❓ Help</button>
      </div>
    </div>
  );
}