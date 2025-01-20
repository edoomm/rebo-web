import React from "react";
import './MidSection.css';
import { Container, Row, Col } from 'react-bootstrap'; // Importa los componentes necesarios de react-bootstrap
import Image from 'react-bootstrap/Image';
import HistoryCarousel from "../Cards/HistoryCarousel";
import HistoryCard from "../Cards/HistoryCard";
import './History.css'

const History: React.FC = () => {
  return (
    <Container fluid className="HistoryBody bg-image p-0">
      {/* Resto del contenido de la parte superior */}
      <Row className="HistoryTop p-0" style={{height:'400px'}}>
        <Col xs={12} lg={6} className="HistoryImages position-relative justify-content-center p-0" style={{marginBottom:'50px', marginTop:'50px', height:'250px'}}>
        <Image className="z-1 position-absolute top-50 start-50 translate-middle" src={require('../Figma Components/History/grupo-rebo-hero-9 1.png')} fluid style={{ width: '85%', maxWidth:'440px' }} />;
        <Image className="z-0 position-absolute top-50 start-50 translate-middle " src={require('../Figma Components/History/Rectangle 31.png')} fluid style={{ width: '80%', maxWidth:'420px' }}/>;
      
        
        </Col>
        <Col xs={12} lg={6} className="HistoryText justify-content-start p-0">
            <h1 className="text-white text-center text-lg-start" style={{marginTop:'30px'}}>Historia</h1>
            <p className="text-white text-center text-lg-start">Historia de la empresa Rebo</p>
        </Col>
        
      </Row>
      <Row className="HistoryLow justify-content-center p-0" style={{marginRight:'0'}} xs={12} lg={12}>
        <div className="d-lg-none p-0">
          <HistoryCarousel/>
        </div>
        <div className="card1 col-4 col-xs-auto justify-content-end d-none d-lg-flex p-0">
            <HistoryCard label="Visión" label2="Visión de la empresa"/>
          </div>
          <div className="card2 col-4 col-xs-auto justify-content-center d-none d-lg-flex p-0">
          <HistoryCard label="Visión" label2="Visión de la empresa"/>
          </div>
          <div className="card3 col-4 col-xs-auto justify-content-start d-none d-lg-flex p-0" style={{margin:'0'}}>
          <HistoryCard label="Visión" label2="Visión de la empresa"/>
          </div>


      </Row>
    </Container>

);
};

export default History;
