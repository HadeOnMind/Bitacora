import React from "react";
import BookMain from "../Components/Bookmain/BookMain";
import BitacoraFooter from "../Components/Bookmain/BitacoraFooter";
import BitacoraHeader from "../Components/Bookmain/BitacoraHeader";
import { Routes, Route, useLocation} from "react-router-dom";
import ListSlider from '../Components/Bookmain/ListSlider'


export default function Bitacora () {

    const location = useLocation();

    const BookPath = location.pathname === "/Bitacora/Book";

    return (
        <div className="BitacoraMainContainer">

          {!BookPath &&(<div id="bitacoraHeader">
            <BitacoraHeader />
          </div>) }
          

          {!BookPath && (<div>
          <ListSlider />
          </div>)}

          <div id="BookrelatedsContainer">

          <Routes>
            <Route path="/*" element={<BookMain />} /> {/* Nested routes */}
          </Routes>

          </div>

          {!BookPath &&(<div id="placerholdersection">
            placeholdersection
          </div>) }


          {!BookPath &&(<div id="bitacoraFooter">
            <BitacoraFooter />
          </div>) }
          
          
        </div>
      );
    };