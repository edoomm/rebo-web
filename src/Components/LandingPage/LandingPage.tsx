import React from 'react';
import BodyStructure from '../Body/BodyStructure';
import HeaderBar from '../Header and Footer/HeaderBar';
function LandingPage() {
  return (
    <div className="App">
      <div className='HeaderApp'>
        <HeaderBar/>
      </div>
      <div className='BodyApp'>
       <BodyStructure/>
      </div>
      
    </div>
  );
}

export default LandingPage;
