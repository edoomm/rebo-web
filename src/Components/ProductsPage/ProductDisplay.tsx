import React, { useState } from 'react';
import HeaderBar from '../Header and Footer/HeaderBar';
import Footer from '../Header and Footer/Footer';
import { Container, Row, Col, Button, Offcanvas, Carousel } from 'react-bootstrap';
import Formular from '../ContactPage/Formular';
import ProductCard from '../Cards/ProductCard';
import './ProductDisplay.css';

interface ProductDisplayProps {}

const ProductDisplay: React.FC<ProductDisplayProps> = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="ProductdDisplayBody" style={{ backgroundColor: 'rgba(33, 33, 26, 1)' }}>
            <HeaderBar />
            <Container className='ContainerDisplay'>
                <Row className="DisplayTop p-0">
                    <h1 className="DisplayTitle text-center text-md-start text-white d-flex align-items-center">Producto 1</h1>
                </Row>
                <div style={{ backgroundColor: 'white', height: '3px', width: '100%' }}></div>
                <Row className="my-4">
                    <Col xs={12} md={6} >
                        <Row className='justify-content-center'>
                            <div style={{backgroundColor:'white', height:'350px',width:'300px'}}></div>
                        </Row>
                        <Row style={{paddingTop:'10px'}} className='justify-content-center'>
                            <div style={{backgroundColor:'white',height:'70px', width:'60px', paddingRight:'10px'}}></div>
                            <div style={{backgroundColor:'white',height:'70px', width:'60px', paddingRight:'10px',marginLeft:'18px'}}></div>
                            <div style={{backgroundColor:'white',height:'70px', width:'60px', paddingRight:'10px',marginLeft:'18px'}}></div>
                            <div style={{backgroundColor:'white',height:'70px', width:'60px', paddingRight:'10px',marginLeft:'18px'}}></div>
                            
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="text-white justify-content-center justify-content-md-start" style={{marginTop:'15px'}}>Categoría: Calzado Industrial</p>
                        <p className="text-white">Nombre del Producto 1</p>
                        <p className="text-white">$699.00</p>
                        <p className="text-white">Descripción detallada del producto</p>
                        <Row style={{paddingBottom:'1rem'}} className='justify-content-center justify-content-md-start'>
                            <Button onClick={handleShow} variant="primary" style={{minWidth:'250px',backgroundColor:'rgba(255, 113, 0, 1)', border:'none'}}>
                                SOLICITA UNA COTIZACIÓN
                            </Button>
                        </Row>
                            
                        <Row className='justify-content-center justify-content-md-start'>
                            <Button style={{background:'none', borderColor:'rgba(255, 113, 0, 1)', color:'rgba(255, 113, 0, 1)', minWidth:'250px'}}>
                                DESCARGAR FICHA TÉCNICA
                            </Button> 
                        </Row>
                        
                        <Offcanvas show={show} onHide={handleClose} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Solicita una cotización</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Formular textColor='black'/>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Col>
                </Row>
                <Row style={{padding:'0', marginLeft:'1rem'       }}>
                    
                        <p className="text-white p-0">Descripción del producto:</p>
                        <p className="text-white p-0">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        </p>
                    
                </Row>
                <Row className='justify-content-center'>
                   
                        <Carousel style={{height:'400px', width:'300px', justifyContent:'center', display:'flex'}} className='d-flex'>
                            <Carousel.Item >
                                <ProductCard label='Producto 1' label2='$699' ProductLink=''/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ProductCard label='Producto 1' label2='$699' ProductLink=''/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ProductCard label='Producto 1' label2='$699' ProductLink=''/>
                            </Carousel.Item>
                        </Carousel>
                    
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ProductDisplay;
