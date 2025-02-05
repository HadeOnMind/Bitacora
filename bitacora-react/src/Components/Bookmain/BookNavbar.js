// BookNavbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/book.css"; // Import the CSS file

export default function BookNavbar() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle the "Go Back" button click
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
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