import React, {useState} from "react";
import BookNavbar from "./BookNavbar";
import Book from "./Book";
import './css/book.css'
import Functionality from "../../Functionality/states";



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

                <button className="BookPageButton" onChange={}>←</button>
                <button className="BookPageButton">→</button>

            </div>
            
        </div>

      
    </div>
  );
}