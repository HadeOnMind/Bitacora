import React from "react";
import { Routes, Route } from 'react-router-dom';
import BookApp from "./BookApp";


export default function BookMain() {
  return (
    <div>
      <Routes>
        <Route path="Book" element={<BookApp />} />                 
      </Routes>
    </div>
  );
}
