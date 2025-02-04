// Bitacora.js
import React from "react";
import { Routes, Route } from 'react-router-dom';
import ListSlider from "./ListSlider";
import BookApp from "./BookApp";
import BookMain from "./BookMain";

export default function Bitacora() {
  return (
    <div>
      <div className="app">
        <ListSlider />
      </div>
      
      <Routes>
        <Route path="Book" element={<BookApp />} />                 
      </Routes>
    </div>
  );
}
