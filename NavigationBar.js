
import React from 'react';

const NavigationBar = ({ onNavigation }) => {
  return (
    <nav>
      <div>
      <h1 style={{ color: 'black' }}><u><center>Anjali Selva's Portfolio</center></u></h1>
      </div>
      <ul>
        <li><button onClick={() => onNavigation('home')}>Home</button></li>
        <li><button onClick={() => onNavigation('about')}>About</button></li>
        <li><button onClick={() => onNavigation('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
