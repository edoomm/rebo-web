import React from "react";
import './MidSection.css';
import { Container, Row, Col } from 'react-bootstrap'; // Importa los componentes necesarios de react-bootstrap
import BodyTop1Button from "../Buttons/BodyTop1Button";

const MidSection: React.FC = () => {
  return (
    <Container fluid className="FullBody bg-image p-0">
      {/* Resto del contenido de la parte superior */}
      
      <Row className="MidBody2 justify-content-end p-0">
        <Col xs={0} lg={4} className="MidBody2Left justify-content-start p-0">
          {/* Espacio vacío o contenido en esta columna */}
        </Col>
        
        <Col xs={12} lg={8} className="MidBody2Right align-items-center position-relative p-0">
          <Row className="Top7 justify-content-end p-0 w-100">
            <Col>
              <div className="Etiqueta-Productos h2 text-white text-center">
                PRODUCTOS
              </div>
            </Col>
          </Row>

          <Row className="Top8 justify-content-center text-wrap py-3 text-black p-0 w-100">
            <Col>
              <p className="h3 text-white text-center">
                Equipo y calzado de seguridad industrial
              </p>
            </Col>
          </Row>

          <Row className="Top9 z-1 d-flex justify-content-center mt-4">
            <Col xs={6} sm="auto" className="ButtonMid p-0">
              <BodyTop1Button 
                label="CONTÁCTANOS" 
                ContactLink="mailto:edgar.mtz@rebo.mx" 
                ButtonColor="white" 
                TextColor="rgba(255, 113, 0, 1)" 
              />
            </Col>
            <Col xs={6} sm="auto" className="ButtonMid p-0">
              <BodyTop1Button 
                label="COTIZA AHORA" 
                ContactLink="mailto:edgar.mtz@rebo.mx" 
                ButtonColor="white" 
                TextColor="rgba(255, 113, 0, 1)" 
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

);
};

export default MidSection;
