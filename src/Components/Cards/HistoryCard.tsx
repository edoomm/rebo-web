import React from "react";
import { Card } from 'react-bootstrap'; // Importamos Card y Button de React Bootstrap
import './HistoryCard.css';




interface HistoryCardprops {
    label: string;
    
    label2: string;
  
}


const HistoryCard: React.FC<HistoryCardprops> = ({ label, label2}) => {
    return (
        <Card className="Values">
            <Card.Img 
                src={require('../Figma Components/History/Misión.png')} 
                className="HistoryCardImage img-fluid" 
                alt="History image" 
            />
            <Card.Body className="HistoryCardBody" style={{maxHeight:'100px'}}>
                <Card.Title className="HistoryCardTitle text-white" style={{ height:'72px', marginBottom:'68px' }}>
                    {label}
                    <p style={{fontSize:'15px'}}>{label2}</p>
                </Card.Title>
                 
            </Card.Body>
            <div style={{width:'300px',backgroundColor:'rgba(255, 113, 0, 1)', height:'2px', marginTop:'125px'}}></div>
        </Card>
    );
};

export default HistoryCard;
