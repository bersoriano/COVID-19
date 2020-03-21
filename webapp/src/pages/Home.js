import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import CameraAlt from '@material-ui/icons/CameraAlt';
import AttachFile from '@material-ui/icons/AttachFile';
import Add from '@material-ui/icons/Add';
import './home.css'
function Home() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="ai-home">
      <h1>Welcome to COVID-19 AI diagnosis</h1>
      <div className="ai-home__content">
        <div className="hero-text">
          <span className="placeHolderText">Diagnosis results will appear here</span>
          <span className="resultText negative">COVID-19 detected</span>
          <span className="resultText positive">COVID-19 not detected</span>          
        </div>
      </div>
      <BottomNavigation
        value={currentTab}
        onChange={(event, newValue) => {
          setCurrentTab(newValue);
        }}
        showLabels
      >
        {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /> */}
        {/* <BottomNavigationAction label="Camera" icon={<CameraAlt />} /> */}
        <BottomNavigationAction label="Upload X-Ray" icon={<Add />} />        
        {/* <BottomNavigationAction label="Attach" icon={<AttachFile />} /> */}
      </BottomNavigation>
    </div>
  );
}

export default Home;