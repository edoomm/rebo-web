import React from "react";
import { Card, Button } from 'react-bootstrap'; // Importamos Card y Button de React Bootstrap
import './LandingPageProducts.css';
// import casco from '../Figma Components/casco1.png'; 



interface LandingPageProductsprops {
    label: string;
    ContactLink: string;
    label2: string;
   
  
}

// function getImageUrl(imageId:string) {
//   return (
//     '../Figma Components/' +
//     imageId +
//     '.png'
//   );
// }

const LandingPageProducts: React.FC<LandingPageProductsprops> = ({ label, ContactLink, label2}) => {
    return (
        <Card className="sm">
            <Card.Img 
                src={require('../Figma Components/casco1.png')} 
                className="ImageEquipment img-fluid" 
                alt="Product image" 
            />
            <Card.Body className="ProductCardBody" style={{maxHeight:'100px'}}>
                <Card.Title className="ProductName text-white" style={{ height:'72px', marginBottom:'68px' }}>
                    {label}
                </Card.Title>
                <Button href={ContactLink} className="CardLink mt-auto " style={{ fontSize:'16px', textDecoration:'none', marginTop:'50px' }}>
                    {label2}
                </Button>
            </Card.Body>
            <div style={{width:'220px',backgroundColor:'rgba(255, 113, 0, 1)', height:'2px', marginTop:'75px'}}></div>
        </Card>
    );
};

export default LandingPageProducts;
