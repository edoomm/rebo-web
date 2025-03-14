import React from "react";
import './ProductsSection.css';
import { Container, Row, Col,Tab,Nav } from 'react-bootstrap'; // Importa los componentes necesarios de react-bootstrap
import ProductCard from "../Cards/ProductCard";




const ProductsSection: React.FC = () => {
  return (
      <Container className="ProductsSection p-0 w-100">
        <Row className="ProductTop p-0">
          <h1 className="ProductTitle text-start text-white ">Productos</h1>
        </Row>
        <div style={{backgroundColor:'white',height:'3px', width:'100%'}}></div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="ProductsDisplayed w-100">
            <Col lg={4} className="Categories">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="Category text-center text-lg-start " eventKey="first">Uniformes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="Category text-center text-lg-start" eventKey="second">Equipo de protección industrial</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="Category text-center text-lg-start" eventKey="third">Calzado Industtrial</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="Category text-center text-lg-start" eventKey="fourth">Herramientas</Nav.Link>
                </Nav.Item>



              </Nav>
            </Col>
           
            <Col lg={8} className="ProductCards">
              <Tab.Content>
                <Tab.Pane className="ProductsShown" eventKey="first">
                  <Row gap={3} className="justify-content-center">
                    <Col style={{paddingBottom:'2rem',justifyContent:'center'}} className="d-flex justify-content-center">
                      <ProductCard label="Producto" label2="Precio" ProductLink="http://localhost:3000/Display"/>
                    </Col>
                    <Col style={{paddingBottom:'2rem'}} className="d-flex justify-content-center">
                      <ProductCard label="Producto" label2="Precio" ProductLink="http://localhost:3000/Productos"/>
                    </Col>
                    <Col style={{paddingBottom:'2rem'}} className="d-flex justify-content-center">
                      <ProductCard label="Producto" label2="Precio" ProductLink="http://localhost:3000/Productos"/>
                    </Col>
                    <Col style={{paddingBottom:'2rem'}} className="d-flex justify-content-center">
                      <ProductCard label="Producto" label2="Precio" ProductLink="http://localhost:3000/Productos"/>
                    </Col>
                    
                  </Row> 
                  
                </Tab.Pane>
                <Tab.Pane className="ProductsShown" eventKey="second">Second tab content</Tab.Pane>
                <Tab.Pane className="ProductsShown" eventKey="third">Third tab content</Tab.Pane>
                <Tab.Pane className="ProductsShown" eventKey="fourth">Fourth tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

);
};

export default ProductsSection;
