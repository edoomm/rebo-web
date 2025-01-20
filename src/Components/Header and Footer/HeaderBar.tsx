import React from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './HeaderBar.css';
import HeaderButton from "../Buttons/HeaderButton";
import { Link } from 'react-router-dom';

interface HeaderBarprops {}

const HeaderBar: React.FC<HeaderBarprops> = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="Header container-fluid p-0 w-100">
			<div className="ContactInfo bg-dark d-flex align-items-center">
				<Navbar expand="lg" className="navbar navbar-expand w-100" style={{minWidth:'none'}}>
					
						<Nav className="TopNav navbar-nav w-100">
							<div className="d-flex direction-row" >
							<Nav.Item className="nav-item" style={{paddingLeft:'10px'}}>
								<Nav.Link  href="https://api.whatsapp.com/send/?phone=5215561585215&text&type=phone_number&app_absent=0" target="_blank" active={false}>
									<i className="bi bi-whatsapp"></i> 55 615 852 15
								</Nav.Link>
							</Nav.Item>
							<Nav.Item className="nav-item justify-content-end">
								<Nav.Link href="mailto:contacto@rebo.mx" target="_blank" active={false}>
									<i className="bi bi-envelope"></i> contacto@rebo.mx
								</Nav.Link>
							</Nav.Item>
							
							</div>
							<div className="d-flex direction-row justify-content-end flex-grow-1 " style={{minWidth:'none', paddingRight:'20px'}}>
								<Nav.Item className="nav-item d-none d-lg-block " >
									<Nav.Link href="https://www.google.com/maps/place/El+Rosario/@19.5046653,-99.2000975,15z/data=!4m2!3m1!1s0x0:0x8a95c0f781b015f2?sa=X&ved=1t:2428&ictx=111" target="_blank" active={false}>
										<i className="bi bi-geo-alt"></i> Ubicación
									</Nav.Link>
								</Nav.Item>
							
							</div>
							
							
						</Nav>
					
				</Navbar>
			</div>
			<div className="LogoContainer d-flex align-items-center justify-content-between">
				<Link to="/">
					<img 
						className="Logo img-fluid" 
						src={require('../Figma Components/ReboLogoWhite.png')} 
						alt="LogoRebo" 
					/>
					</Link>
				<div className="ButtonContainer d-flex gap-3 justify-content-start">
					<Button variant="primary" onClick={handleShow} className="Menu d-lg-none text-center" style={{ border: 'none', background: 'none' }}>
						<img className="MenuIcon" src={require('../Figma Components/Menu_Button.png')} alt="MenuIcon" />
					</Button>
					<Nav className="nav navbar-expand-lg d-none d-lg-flex justify-content-start nav-pills flex-column flex-sm-row">
						<HeaderButton label="INICIO"  routePath="/" LabelColor="white" />
						<HeaderButton label="NOSOTROS"  routePath="/Nosotros" LabelColor="white" />
						<HeaderButton label="PRODUCTOS +"  routePath="/Productos" LabelColor="white" />
						<HeaderButton label="FAQS"  routePath="/Display" LabelColor="white" />
						<HeaderButton label="CONTACTO"  routePath="/Contacto" LabelColor="white" />
					</Nav>
				</div>
			</div>
			<Offcanvas className="Menu" show={show} onHide={handleClose} responsive="lg">
				<Offcanvas.Header closeButton>
				</Offcanvas.Header>
				<Offcanvas.Body className="d-lg-none d-block d-flex flex-column align-items-center justify-content-top">
					<HeaderButton label="INICIO"  routePath="/" LabelColor="white" />
					<HeaderButton label="NOSOTROS"  routePath="/Nosotros" LabelColor="white" />
					<HeaderButton label="PRODUCTOS +"  routePath="/Productos" LabelColor="white" />
					<HeaderButton label="FAQS"  routePath="" LabelColor="white" />
					<HeaderButton label="CONTACTO"  routePath="/Contacto" LabelColor="white" />
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};

export default HeaderBar;
