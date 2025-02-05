// BookLayout.js
import React from "react";
import "./css/book.css"; 

export default function Book() {
  return (
    <div className="book-layout">
      <div className="book-header">
        <h2>Book Title Placeholder</h2>
        <p>Author: Placeholder Author</p>
      </div>


      <div className="book-content">
        <div className="book-page">
          <div className="text-placeholder">
            <p>This is a placeholder for text on the left page.</p>
          </div>
          <div className="image-placeholder">
            <p>Image Placeholder</p>
          </div>
        </div>

        <div className="book-page">
          <div className="text-placeholder">
            <p>This is a placeholder for text on the right page.</p>
          </div>
          <div className="image-placeholder">
            <p>Image Placeholder</p>
          </div>
        </div>
      </div>

      <div className="book-footer">
        <p>Page 1 of 10</p>
      </div>
    </div>
  );
}