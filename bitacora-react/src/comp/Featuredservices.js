import React from 'react';
import './styles.css'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';


//Services or Features: List out the key services or features you offer, with icons or images for visual appeal

function FeaturedServices(){
    return(
        <div>

        <div>

            <h2>
                Featured Services
            </h2>
            <p>Fugiat mollit velit culpa enim laborum sit sint sit fugiat enim.</p>
            <div>
                <KeyboardArrowLeft />
                <KeyboardArrowRight />
            </div>
            

        </div>
        <div>

            <div>
                <img src="bitacora-react\public\index.html" alt="Placeholder Image" />
                <p>Customization...</p>
            </div> 

            <div>
                <img src="bitacora-react\public\index.html" alt="Placeholder Image" />
                <p></p>
            </div>

            <div>
                <img src="bitacora-react\public\index.html" alt="Placeholder Image" />
                <p></p>
            </div>


        </div>
            

        </div>
    );
}




export default FeaturedServices;