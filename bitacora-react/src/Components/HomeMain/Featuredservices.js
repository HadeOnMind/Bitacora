import React from 'react';
import './css/home.css';
import TuneIcon from '@mui/icons-material/Tune';
import PeopleIcon from '@mui/icons-material/People';
import PaletteIcon from '@mui/icons-material/Palette';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import LightbulbIcon from '@mui/icons-material/Lightbulb';


function FeaturedServices() {
  return (
    <div className="FeaturedServices">
      <div>
        <h2>Featured Services</h2>
        <p>Fugiat mollit velit culpa enim laborum sit sint sit fugiat enim.</p>
      </div>
      <div>
        <div className="service-item">
          <TuneIcon style={{ fontSize: '3rem', color: 'var(--accent-color)' }} />
          <p>Customization</p>
        </div>
        <div className="service-item">
          <PeopleIcon style={{ fontSize: '3rem', color: 'var(--accent-color)' }} />
          <p>Collaboration</p>
        </div>
        <div className="service-item">
          <PaletteIcon style={{ fontSize: '3rem', color: 'var(--accent-color)' }} />
          <p>Creativity</p>
        </div>
        <div className="service-item">
          <FolderIcon style={{ fontSize: '3rem', color: 'var(--accent-color)' }} />
          <p>Organization</p>
        </div>
        <div className="service-item">
          <DescriptionIcon style={{ fontSize: '3rem', color: 'var(--accent-color)' }} />
          <p>Documentation</p>
        </div>
        <div className="service-item">
          <LightbulbIcon style={{ fontSize: '3rem', color: 'var(--accent-color)' }} />
          <p>Innovation</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedServices;