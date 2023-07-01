import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {FcRight,FcLeft} from "react-icons/fc"
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import "./index.css"

const Testimonel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = new Swiper(swiperRef.current, {
      // Swiper configuration options
    });

    // Event handlers
    const handleNextSlide = () => {
      swiperInstance.slideNext();
    };

    const handlePrevSlide = () => {
      swiperInstance.slidePrev();
    };

    // Clean up event listeners on component unmount
    return () => {
      swiperInstance.destroy();
    };
  }, []);

  return (
    <>
    <div className='large-divces-testinmonel'>
    <div className='carosel-main-conatiner'>
    
    <div className="slider-container testimoniel">
    <h5 className='text small-heading'>TESTIMONIALS
</h5>
    <h1 className='text mb-5 pb-5'>Their Words, Our Success: Client Testimonials
</h1>
      <div className="swiper-container-card" ref={swiperRef}>
        <div className="swiper-wrapper">
        
          <div className="swiper-slide">
            <div className=''>
            
            <div class="testimonials-card mb-3">
            <div className='people-imge '>
            <img className="imge-testinomels" alt="imge" src="https://fakeimg.pl/150x152/"/>
           </div>
  <div className="container-testimonels  pt-3">
    <h4 className='bottom-padding'><b>Requirement Gathering</b></h4>
    <p>	We used My friend Info Solutions to build a custom calculator. Our experience from start to finish was excellent. The entire staff is very professional and knowledgeable. There was constant communication and updates throughout the project which made the entire process simple and facile. We would highly recommend My friend Info Solutions.
</p>
  </div>
          </div>
            </div>
          </div>
          <div className="swiper-slide">


          <div class="testimonials-card mb-3">
          <div className='people-imge mb-'>
          <img className="imge-testinomels" alt="imge" src="https://fakeimg.pl/150x152/"/>
</div>
  
  <div className="container-testimonels">
    <h4 className='bottom-padding'><b>Mahesh</b></h4>
    <p>					     
    My friend Info solutions is a top-notch team which employs a structured agile programming process in their development. Amazing people and helpful. The team is friendly and easy to work with and always produce a good project experience. Besides the team being great, they are fast and efficient, met my deadlines and produced a great final product. I would recommend My Friend Info Solutions to anyone that is looking for software development. </p>
</div>
            </div>

          </div>
          <div className="swiper-slide">

            <div class="testimonials-card mb-3">
            <div className='people-imge mb-'>
            <img className="imge-testinomels" alt="imge" src="https://fakeimg.pl/150x152/"/>
</div>
  <div className="container-testimonels mb-3 pt-3">
    <h4 className='bottom-padding'><b>Swetha</b></h4>
<p>I'd like to say a few words about the My Friend Info Solutions crew. We've been working on small and large websites together, and they've all been developed with high quality and in a timely manner; I'm very pleased with the results of the projects we've been working on together. Their dedicated web developer was extremely knowledgeable, friendly, and communicative. Overall, the team was a pleasure to work with.</p>
  </div>
            </div>

          </div>

          <div className="swiper-slide">
        
           <div class="testimonials-card mb-3">
  <div className='people-imge mb-'>
  <img className="imge-testinomels" alt="imge" src="https://fakeimg.pl/150x152/"/>
</div>
 
  <div className="container-testimonels pt-3">
    <h4 className='bottom-padding'><b>SoftTech</b></h4>
<p>Our firm had struggled a lot to rescue our software development process. Initially, we were resistant to outsourcing the entire project because of its complexity and Industry knowledge. After doing a meeting with the Project Manager at My Friend Info Solutions, we have decided to move the entire product development to them. Our SDLC was never managed this efficiently before.</p>
  </div>
           </div>
          </div>


          <div className="swiper-slide">
        
             <div class="testimonials-card mb-3">
  <div className='people-imge mb-'>
  <img className="imge-testinomels" alt="imge" src="https://fakeimg.pl/150x152/"/>
</div>
  <div className="container-testimonels pt-3">
  <h4 className='bottom-padding'> Sk Mamidipak</h4>
  <p>I've been working with my friend Info solutions for the past two years to design and develop mobile applications for my clients. I am quite pleased with their services. They have outperformed my expectations. They have always been there, willing to assist us whenever we needed them. Our experience with Webcodegenie has been nothing short of extraordinary.

</p>
      </div>
             </div>

          </div>


          <div className="swiper-slide">
          
           <div class="testimonials-card mb-3">
          <div className='people-imge '>
          <img className="imge-testinomels" alt="imge" src="https://fakeimg.pl/150x152/"/>
</div>
 
  <div className="container-testimonels pt-3">
    <h4 className='bottom-padding'><b>Mahesh</b></h4>
    <p>We used My friend Info Solutions to build a custom calculator. Our experience from start to finish was excellent. The entire staff is very professional and knowledgeable. There was constant communication and updates throughout the project which made the entire process simple and facile. We would highly recommend My friend Info Solutions.
</p>
  </div>
           </div>
          </div>


          
          {/* Add more slides as needed */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="slider-controls">
        <button className='btn-left' onClick={() => swiperRef.current.swiper.slidePrev()}>
          <FcLeft/>
        </button>
        <button className='btn-left' onClick={() => swiperRef.current.swiper.slideNext()}>
          <FcRight/>
        </button>
      </div>
    </div>
    </div>
<div className='small-device-testi'>
    <div className='samll-device-testimonels'>
    <h5 className='text small-heading'>TESTIMONIALS
   </h5>
    <h1 className='text mb-5'>Their Words, Our Success: Client Testimonials
                            </h1>
   
      
    <Carousel>


          
           <div className='testi-container-cards m-3'>
           <div>
              <div className="testimonials-card">
             <img  alt="imge" className='carosel-testi-img' src="https://fakeimg.pl/150x152/"/>
              <div className="container-testimonels">
              <h4 className=''> Sk Mamidipak</h4>
          <p>I've been working with my friend Info solutions for the past two years to design and develop mobile applications for my clients. I am quite pleased with their services. They have outperformed my expectations. They have always been there, willing to assist us whenever we needed them. Our experience with Webcodegenie has been nothing short of extraordinary.</p></div>
            </div>
            </div>
           </div>
          
          <div className='testi-container-cards m-3'>
           <div>
              <div className="testimonials-card">
             <img  alt="imge" className='carosel-testi-img' src="https://fakeimg.pl/150x152/"/>
              <div className="container-testimonels">
              <h4 className=''><b>SoftTech</b></h4>
              <p>Our firm had struggled a lot to rescue our software development process. Initially, we were resistant to outsourcing the entire project because of its complexity and Industry knowledge. After doing a meeting with the Project Manager at My Friend Info Solutions, we have decided to move the entire product development to them. Our SDLC was never managed this efficiently before.</p>
              </div>
            </div>
            </div>
           </div>


           <div className='testi-container-cards m-3'>
           <div>
              <div className="testimonials-card">
             <img  alt="imge" className='carosel-testi-img' src="https://fakeimg.pl/150x152/"/>
              <div className="container-testimonels">
              <h4 className=''><b>Swetha</b></h4>
              <p>I'd like to say a few words about the My Friend Info Solutions crew. We've been working on small and large websites together, and they've all been developed with high quality and in a timely manner; I'm very pleased with the results of the projects we've been working on together. Their dedicated web developer was extremely knowledgeable, friendly, and communicative. Overall, the team was a pleasure to work with.</p>
          </div>
            </div>
            </div>
           </div>

           
           <div className='testi-container-cards m-3'>
           <div>
              <div className="testimonials-card">
             <img  alt="imge" className='carosel-testi-img' src="https://fakeimg.pl/150x152/"/>
              <div className="container-testimonels">
              <h4 className=''><b>Mahesh</b></h4>
              <p>My friend Info solutions is a top-notch team which employs a structured agile programming process in their development. Amazing people and helpful. The team is friendly and easy to work with and always produce a good project experience. Besides the team being great, they are fast and efficient, met my deadlines and produced a great final product. I would recommend My Friend Info Solutions to anyone that is looking for software development. </p>
              </div>
            </div>
            </div>
           </div>

           
           <div className='testi-container-cards m-5'>
           <div>
              <div className="testimonials-card">
             <img  alt="imge" className='carosel-testi-img' src="https://fakeimg.pl/150x152/"/>
              <div className="container-testimonels">
              <h4 className=''><b>Mahesh</b></h4>
              <p>My friend Info solutions is a top-notch team which employs a structured agile programming process in their development. Amazing people and helpful. The team is friendly and easy to work with and always produce a good project experience. Besides the team being great, they are fast and efficient, met my deadlines and produced a great final product. I would recommend My Friend Info Solutions to anyone that is looking for software development. </p>
              </div>
            </div>
            </div>
           </div>

    </Carousel>
    </div>
  </div>
    </div>
    </>
  );
};

export default Testimonel;
