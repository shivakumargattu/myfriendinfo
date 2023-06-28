import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function EcomersCarosuel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className='d-flex'>
        <img
          className="d-block w-40"
          src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-s2.png"
          alt="First slide"
        />

        <img alt="secom" src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-s1.png"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex'>
      <img alt="secom" src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-s1.png"/>
        <img
          className="d-block w-40"
          src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-s2.png"
          alt="First slide"
        />

        
        </div>
       
      </Carousel.Item>
     
    </Carousel>
  );
}

export default EcomersCarosuel;