import React from 'react';
import './styles.css'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


//Footer: Include links to important pages, social media icons, and any legal information like privacy policy and terms of service.

function Footer ( ){
    return(
        <div>
            <div>

                <h2>Work with us</h2>
                <p>Wanna talk about ur project?</p>

            </div>

            <div>

                <p>Contact us</p>
                <KeyboardArrowRight />

            </div>

            <div>

                <p>0000000x00000</p>
                <p>anonymous@hotmail.com</p>

            </div>


            <div>

            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YouTubeIcon />

            </div>
           
        </div>
    );
}




export default Footer;