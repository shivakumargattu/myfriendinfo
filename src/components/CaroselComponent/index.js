import Carousel from 'react-bootstrap/Carousel';

import "./index.css"

function Carouseles() {
  return (
    <Carousel className='bg-carosuel' >
    
      <Carousel.Item>
    <div  className='carousel-content d-flex'>
  

        <div className='box2 w-54'>
        <div className='carosel-conatiner-text'>
            <h1 className='carosel-mai-heading'>Web Development</h1>
            <h4 className='carosel-sub-head'> Creating Digital Experiences that Stand out from the Crowd</h4>
            <p className='carosel-description'>Our web development services provide custom solutions tailored to your business needs. Whether you need a simple brochure website or a complex e-commerce platform, our experienced developers will bring your vision to life.</p>
        
            </div>
        </div>    
        
        <img
          className=" digital-market imges-oreder "
          src= "https://img.webcodegenie.com/img/home/banner-web-development.svg?ver=20230608134812"
          alt="First slide"
        />
        
        </div>
        
      
      </Carousel.Item>


      <Carousel.Item>
      <div  className='carousel-content d-flex'>
  

  <div className='box2 '>
  <div className='carosel-conatiner-text'>
      <h1 className='carosel-mai-heading'>Mobile App Development</h1>
      <h4 className='carosel-sub-head'> We use Tech to Create, Connect, & Grow
</h4>
      <p className='carosel-description'>We are a mobile app development company specializing in creating innovative and high-quality mobile applications for various platforms..</p>
  
      </div>
  </div>    
  
  <img
    className="digital-market"
    src= "https://img.webcodegenie.com/img/home/banner-app-development.svg?ver=20230608134812"
    alt="First slide"
  />
  
  </div>
  
      </Carousel.Item>



      <Carousel.Item>
      <div  className='carousel-content d-flex'>
  

  <div className='box2 w-54'>
  <div className='carosel-conatiner-text'>
      <h1 className='carosel-mai-heading'>Digital Marketing</h1>
      <h4 className='carosel-sub-head'> We Provide Best Let's Talk about SMM</h4>
      <p className='carosel-description'>In the highly competitive digital landscape, our digital marketing services help your business stand out. We employ effective strategies such as search engine optimization (SEO), social media marketing, and pay-per-click (PPC) advertising to increase your online visibility, drive targeted traffic, and generate leads. Our goal is to maximize your online presence and help you achieve your marketing objectives.</p>
  
      </div>
  </div>    
  
  <img
    className="digital-market"
    src= "https://img.webcodegenie.com/img/services/digital-marketing/digital-marketing.webp?ver=20230615133940"
    alt="First slide"
  />
  
  </div>
  
      </Carousel.Item>


      
    </Carousel>
  );
}

export default Carouseles;