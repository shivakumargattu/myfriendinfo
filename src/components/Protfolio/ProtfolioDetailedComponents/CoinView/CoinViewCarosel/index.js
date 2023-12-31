import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./index.css"

function CoinViewCarosuel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className='d-flex'>
        <img
          className="imges-coin"
          src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-4.jpg"
          alt="First slide"
        />

        <img alt="secom" className="imges-coin"
                  src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-3.jpg"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex'>
      <img alt="secom" src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-s1.png"/>
        <img
          className="imges-coin"
          src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-12.jpg"
          alt="First slide"
        />

        
        </div>
       
      </Carousel.Item>
     
    </Carousel>
  );
}

export default CoinViewCarosuel;