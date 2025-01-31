import React from 'react';
import './css/home.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LightbulbCircleOutlined from '@mui/icons-material/LightbulbCircleOutlined';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

function Footer() {
  return (
    <footer id="footer-section">
      <div>
        <h2>Work with us</h2>
        <p>Wanna talk about your project?</p>
      </div>
      <div>
        <p>Contact us</p>
        <KeyboardArrowDown />
      </div>
      <LightbulbCircleOutlined/ >
      <div>
        <p>0000000x00000</p>
        <p>anonymous@hotmail.com</p>
      </div>
      <div className="social-icons">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </div>
    </footer>
  );
}

export default Footer;