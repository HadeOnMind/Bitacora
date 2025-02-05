import React from "react";
import BookNavbar from "./BookNavbar";
import Book from "./Book";
import './css/book.css'



export default function BookApp() {
  return (
    <div id="MainBookContainer">
      
        <div className="MenuNav">
            <BookNavbar />
        </div>

        <div className="MiddleRow">

            <div className="slide-sidebar">
                <div className="slide-thumbnail"></div>
                <div className="slide-thumbnail"></div>
                <div className="slide-thumbnail"></div>

            </div>
            <div className="BookContainer">
                <Book />
            </div>

        </div>
        
        <div className="OptionsFooter">
            <div>

                <button className="BookPageButton">Next Page</button>
                <button className="BookPageButton">Prev Page</button>

            </div>
            
        </div>

      
    </div>
  );
}