import React from 'react';
import '../comp/styles.css'

export default function Bitacora () {
 return(

        <div id="BookContainer">

                <div className="Page" id="LeftPage">
                    <div className="PageImage" id="PageImageLeft">Click to Add Image</div>
                    
                    <div className="PageText">
                        <textarea name="lefText" id="lefText" placeholder="Place some text right here"></textarea>
                    </div>
                </div>
    
        
                <div className="Page" id="RightPage">
                    <div className="PageImage">Click to Add Image</div>

                    <div className="PageText">
                        <textarea name="righText" id="righText" placeholder="Place some text right here"></textarea>
                    </div>
                </div>
    
        </div>
    );
};
