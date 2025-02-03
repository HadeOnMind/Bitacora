import React, { useState } from "react";
import BookMain from "../Components/Bookmain/BookMain";
import BitacoraFooter from "../Components/Bookmain/BitacoraFooter";
import BitacoraHeader from "../Components/Bookmain/BitacoraHeader";



export default function Bitacora () {


    return (
        <div className="BitacoraMainContainer">
          <div id="bitacoraHeader">
            <BitacoraHeader />
          </div>

          <div id="BookrelatedsContainer">

          <BookMain />

          </div>


          <div id="bitacoraFooter">
            <BitacoraFooter />
          </div>
          
        </div>
      );
    };