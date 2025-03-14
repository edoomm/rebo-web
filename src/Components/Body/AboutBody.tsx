import React from "react";
import './AboutBody.css';
import { Container, Row, Col } from 'react-bootstrap'; // Importa los componentes necesarios de react-bootstrap
import BodyTop1Button from "../Buttons/BodyTop1Button";

const AboutBody: React.FC = () => {
  return (
    <Container fluid className="FullBody bg-image p-0"> {/* Usa Container en lugar de div */}
      
      <Row className="MidBody1About justify-content-center p-0"> {/* Reemplaza row por Row */}
        
        <Col xs={12} lg={6} className="LeftSectionMid3 pt-4"> {/* Usa Col en lugar de div */}
          <Row className="Top10 justify-content-left">
            <Col className="EtiquetaProductos h2 text-white text-center">
              Acerca de Nosotros
            </Col>
          </Row>
          
          <Row className="Top11 justify-content-center text-wrap py-3 text-black">
            <p className="h3 text-white text-center">Texto de ejemplo</p>
          </Row>
          
          <Row className="Top12 justify-content-center mt-4 p-0">
            <Col xs={6} sm="auto" className="ButtonMid">
              <BodyTop1Button label="MÁS INFORMACIÓN" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="rgba(255, 113, 0, 1)" TextColor="white" />
            </Col>
            <Col xs={6} sm="auto" className="ButtonMid">
              <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
            </Col>
          </Row>
        </Col>
        
        <Col xs={12} lg={6} className="RightSectionMid3 position-relative d-flex justify-content-center align-items-center"> {/* Usa Col para la imagen */}
          <img className="ReboHero3 img-fluid z-1 position-absolute top-15 end-0" src={require('../Figma Components/grupo-rebo-hero-3 1.png')} alt="Logo" />
          <img className="ReboHero4 img-fluid z-2 position-absolute top-50 start-0 d-none d-lg-block" src={require('../Figma Components/grupo-rebo-hero-4 1.png')} alt="Logo" />
          <img className="OrangeRectangle img-fluid z-0 position-absolute top-20 end-30" src={require('../Figma Components/Rectangle 26.png')} alt="Logo" />
        </Col>
        
      </Row> 

    </Container>
  );
};

export default AboutBody;
