import React from "react";
import './css/slider.css'
import { Link } from "react-router-dom";





export default function ListSlider() {
  const items = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
  }));

  const handleItemClick = (itemId) => {
    console.log(`Item ${itemId} clicked!`);
  }

  return (
    <div className="slider-container">
        <div id="slider-title">
          My Books
        </div>
      
      <div className="slider">
        {items.map((item) => (
          <div key={item.id} className="slider-item">

          <Link to="/Bitacora/Book">
            <div className="placeholder-square"
              onClick={() => handleItemClick(item.id)}></div>
            <p>{item.text}</p>
          </Link>

          </div>
        ))}
      </div>
    </div>
  );
};