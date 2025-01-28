import React from 'react';


function Bitacora () {
    return(

        <div id="BookContainer">

                <div class="Page" id="LeftPage">
                    <div class="PageImage" id="PageImageLeft">Click to Add Image</div>
                    
                    <div class="PageText">
                        <textarea name="lefText" id="lefText" placeholder="Place some text right here"></textarea>
                    </div>
                </div>
    
        
                <div class="Page" id="RightPage">
                    <div class="PageImage">Click to Add Image</div>

                    <div class="PageText">
                        <textarea name="righText" id="righText" placeholder="Place some text right here"></textarea>
                    </div>
                </div>
    
        </div>
    );
}


export default Bitacora
