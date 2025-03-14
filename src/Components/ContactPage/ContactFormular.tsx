import React from "react";

import { Container, Row, Col } from 'react-bootstrap'; // Importa los componentes necesarios de react-bootstrap
import Formular from "./Formular";
import './ContactFormular.css';




const ContactFormular: React.FC = () => {
  return (
    <Container className="ContactSection p-0 w-100">
        <Row className="ContactName p-0 w-100">
            <h1 className="ContactTitle text-md-start text-center text-white d-flex align-items-center  ps-lg-5 justify-content-center justify-content-lg-start ">Contacto</h1>
        </Row>
        <div style={{backgroundColor:'white',height:'3px', width:'100%'}}></div>
        <Row style={{margin:'0', minHeight:'774px'}} className="ContactFormular">
            <Col xs={12} lg={6} className="ImageContact order-2 order-lg-1">

            </Col>
            <Col  xs={12} lg={6} style={{backgroundColor:'rgba(33, 33, 26, 1)'}}  className="Form order-1 order-lg-2">
                <p className="text-white" style={{paddingTop:'20px'}}>Ejemplo del texto antes del formulario</p>
                <Formular textColor="white"/>
            
            </Col>

        </Row>






    
    </Container>
        );
        };

export default ContactFormular;