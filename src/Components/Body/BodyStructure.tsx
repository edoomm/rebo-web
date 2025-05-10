import React from "react";
import './BodyStructure.css';
import BodyTop1Button from "../Buttons/BodyTop1Button";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import LandingPageProducts from "../Cards/LandingPageProducts";

// import ContactButton from "../Buttons/ContactButton";
import ProductCarousel from "../Cards/CarouselCards";
// import Casco from "/WIP/prototypes/src/Components/Figma Components/casco1.png";
// import Botas from "/WIP/prototypes/src/Components/Figma Components/botas 3.png";
// import Chaleco from "/WIP/prototypes/src/Components/Figma Components/chaleco 1.png";
// import QualityCards from "../Cards/QualityCard";
import MedalHolder from "../Cards/MedalHolder";
import Footer from "../Header and Footer/Footer";

const BodyStructure: React.FC = () => {
  return (
    <div className="FullBody container-fluid bg-image p-0">
      <div className="TopBody">
        <div className="Top1 row justify-content-left ">
          <div className="LogoReboContainer col justify-content-center justify-content-lg-start  ">
          <img className="LogoReboTop img-fluid " src={require('../Figma Components/ReboTopSection.png')} alt="Logo" />
          </div>
        </div>
        <div className="Top2 row justify-content-center justify-content-lg-start text-wrap py-3  text-black" > 
		     <p className="MainTitle  h-md2 text-center text-lg-start text-white"> 
            Equipo y calzado de seguridad industrial
          </p>
        </div>
        <div className="Top3 row justify-content-center justify-content-lg-start mt-4 ">
          <div className="col-12 col-sm-auto justify-content-start justify-content-md-center">
            <BodyTop1Button label="VER PRODUCTOS" ContactLink="mailto:contacto@rebo.mx" ButtonColor="rgba(255, 113, 0, 1)" TextColor="white" />
          </div>
          <div className="col-12 col-sm-auto">
            <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
          </div>

        </div>
      </div>
      <div className="MedalHolderContainer">
        <MedalHolder/>
      </div>
      <div style={{height:'5px',backgroundColor:'white', width:'100%'}}></div>

      <div className="MidBody p-0" >
        <div className="Top4 row justify-content-left" style={{ marginTop: '4em' }}>
          <div className="Etiqueta-Productos col h2 text-white text-center">
            PRODUCTOS
          </div>
        </div>
        <div className="Top5 row justify-content-center text-wrap py-3  text-black" > 
		     <p className="h3 text-white text-center" > 
            Equipo y calzado de seguridad industrial
          </p>
        </div>
        <div className="Top6 row  mt-4 justify-content-end p-0">
          <div className="d-lg-none">
           <ProductCarousel/>
          </div>
 
          <div className="card1 col-4 col-xs-auto justify-content-end d-none d-lg-flex p-0">
            <LandingPageProducts ContactLink=""label="Equipo de Protección Industrial"  label2='VER PRODUCTOS' />
          </div>
          <div className="card2 col-4 col-xs-auto justify-content-center d-none d-lg-flex p-0">
            <LandingPageProducts ContactLink=""label="Equipo de Protección Industrial"  label2='VER PRODUCTOS' />
          </div>
          <div className="card3 col-4 col-xs-auto justify-content-start d-none d-lg-flex p-0" style={{margin:'0'}}>
            <LandingPageProducts ContactLink=""label="Equipo de Protección Industrial"  label2='VER PRODUCTOS' />
          </div>
         
        </div>
      </div>
      <div className="MidBody2 row justify-content-end p-0 ">
        <div className=" MidBody2Left col-0 col-lg-4 justify-content-start p-0">
          
        </div>
        <div className="MidBody2Right col-12 col-lg-8 align-items-center position-relative p-0 ">
          
          <div className="Top7  justify-content-end p-0 w-100">
            <div className="Etiqueta-Productos col h2 text-white text-center">
              PRODUCTOS
            </div>
          </div>
          <div className="Top8   row justify-content-center text-wrap py-3  text-black p-0 w-100" > 
          <p className="h3 text-white text-center" > 
              Equipo y calzado de seguridad industrial
            </p>
          </div>
          <div className="Top9 z-1 d-flex  row  justify-content-center mt-4">
            <div className="ButtonMid col-6 col-sm-auto p-0">
            <BodyTop1Button label="CONTÁCTANOS" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
            </div>
            <div className="ButtonMid col-6 col-sm-auto p-0">
            <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
            </div>
          </div>
        </div>
        
      </div>
      <div className="MidBody3 row justify-content-center p-0 ">
        <div className="LeftSectionMid3 col-12 col-lg-6 pt-4 ">
          <div className="Top10 row justify-content-left ">
            <div className="Etiqueta-Productos col h2 text-white text-center">
              Acerca de Nosotros
            </div>
          </div>
          <div className="Top11 row justify-content-center text-wrap py-3  text-black" > 
          <p className="h3 text-white text-center p-0" > 
             Texto de ejemplo
            </p>
          </div>
          <div className="Top12 row justify-content-center mt-4 p-0">
            <div className="ButtonMid col-6 col-sm-auto p-0">
            <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
            </div>
            <div className="ButtonMid col-6 col-sm-auto p-0">
            <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
            </div>
          </div>
        </div>
        <div className="RightSectionMid3 position-relative col-12 col-lg-6 d-flex justify-content-center align-items-center p-0 ">
         <img className="ReboHero3 img-fluid  z-1  position-absolute top-15 end-0" src={require('../Figma Components/grupo-rebo-hero-3 1.png')} alt="Logo" />
         <img className="ReboHero4 img-fluid z-2 position-absolute top-50 start-0 d-none d-lg-block" src={require('../Figma Components/grupo-rebo-hero-4 1.png')} alt="Logo" />
         <img className="OrangeRectangle img-fluid z-0  position-absolute top-15 end-30" src={require('../Figma Components/Rectangle 26.png')} alt="Logo" />
        </div>
        
      </div>
      <Footer/>
    </div>
    
  );
};

export default BodyStructure;
