import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LandingPageProducts from './LandingPageProducts';
// import Casco from "/WIP/prototypes/src/Components/Figma Components/casco1.png";
// import Botas from "/WIP/prototypes/src/Components/Figma Components/botas 3.png";
// import Chaleco from "/WIP/prototypes/src/Components/Figma Components/chaleco 1.png";

function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
    <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center " style={{height:'400px'}} >
        <LandingPageProducts label='Equipo de protección industrial' label2='VER PRODUCTO' ContactLink=''/>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center" style={{height:'400px'}}  >
        <LandingPageProducts label='Equipo de protección industrial' label2='VER PRODUCTO' ContactLink='' />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center" style={{height:'400px'}}  >
        <LandingPageProducts label='Equipo de protección industrial' label2='VER PRODUCTO' ContactLink='' />
      </div>
    </Carousel.Item>
  </Carousel>
  );
}

export default ProductCarousel;
