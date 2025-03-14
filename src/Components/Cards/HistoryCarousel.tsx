import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HistoryCard from './HistoryCard';

function HistoryCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
    <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center " style={{height:'400px'}} >
        <HistoryCard label='Vision' label2='Vision de la empresa'/>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center" style={{height:'400px'}}  >
         <HistoryCard label='Vision' label2='Vision de la empresa'/>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center" style={{height:'400px'}}  >
        <HistoryCard label='Vision' label2='Vision de la empresa'/>
      </div>
    </Carousel.Item>
  </Carousel>
  );
}

export default HistoryCarousel;
