import React from 'react';
import { Card,  } from 'react-bootstrap'; // Importamos Card, Button e Image de React Bootstrap
import './QualityCard.css'
interface QualityCardsProps {
  label: string;
  
  
}

const QualityCards: React.FC<QualityCardsProps> = ({ label  }) => {
  return (
    <Card className="QualityCard" style={{background:'none', border:'none', width:'150px', height:'110px', paddingTop:'20px',paddingBottom:'20px'}}>
      <span className="rounded-circle">
        {/* Asegúrate de que la ruta sea correcta */}
        <Card.Img variant="top"
          src={require('../Figma Components/Medals/Group 17.png')} 
          className="MedalImage img-fluid" 
          alt="Product image" 
         
        />
      </span>
      
      <Card.Body style={{height:'40px', padding:'0'}}>
        <Card.Title className="MedaltName " style={{ fontSize: 'calc(0.5rem + 0.75vw)', font:'ubuntu',color:'rgba(153, 0, 0, 1)' }}>
          {label}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default QualityCards;
