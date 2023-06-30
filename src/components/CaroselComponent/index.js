import Carousel from 'react-bootstrap/Carousel';

import "./index.css"

function Carouseles() {
  return (
    <Carousel className='bg-carosuel' >
    
      <Carousel.Item>
    <div  className='carousel-content d-flex'>
  

        <div className=''>
        <div className='carosel-conatiner-text p-4 pb-5'>
            <h1 className='carosel-mai-heading'>Web Development</h1>
            <h4 className='carosel-sub-head'> Creating Digital Experiences that Stand out from the Crowd</h4>
            <p className='carosel-description'>Our web development services provide custom solutions tailored to your business needs. Whether you need a simple brochure website or a complex e-commerce platform, our experienced developers will bring your vision to life.</p>
           
      <a href='/contactus'>     <button className='get-in-btn nobg-btn m-3 mt-0'>GET A FREE QUOTE </button></a>
            </div>
        </div>    
        
        <img
          className=" banner-imge imges-oreder "
          src= "https://img.webcodegenie.com/img/home/banner-web-development.svg?ver=20230608134812"
          alt="First slide"
        />
        
        </div>
        
      
      </Carousel.Item>


      <Carousel.Item>
      <div  className='carousel-content d-flex'>
  

  <div className=' '>
  <div className='carosel-conatiner-text p-3 pb-5'>
      <h1 className='carosel-mai-heading app-develop-main-heading'>Mobile Development</h1>
      <h4 className='carosel-sub-head'> Cross-platform app  <br/> We use Tech to Create, Connect<br/> Grow
</h4>
      <p className='carosel-description'>We are a mobile app development company specializing in creating innovative and high-quality mobile applications for various platforms. Our team of skilled developers and designers work collaboratively to deliver mobile solutions that align with your business goals and provide a seamless user experience.</p>
  <a href='/contactus'>    <button className='get-in-btn nobg-btn m-3 mt-0'>GET A FREE QUOTE </button></a>
         
      </div>
  </div>    
  
  <img
    className="banner-imge"
    src= "https://img.webcodegenie.com/img/home/banner-app-development.svg?ver=20230608134812"
    alt="First slide"
  />
  
  </div>
  
      </Carousel.Item>



      <Carousel.Item>
      <div  className='carousel-content d-flex'>
  

  <div className=''>
  <div className='carosel-conatiner-text p-3 pb-3'>
      <h1 className='carosel-mai-heading'>Digital Marketing</h1>
      <h4 className='carosel-sub-head'> We Provide Best Let's Talk about SMM <br/> E-commerce app development</h4>
      <p className='carosel-description'>In the highly competitive digital landscape, our digital marketing services help your business stand out. We employ effective strategies such as search engine optimization (SEO), social media marketing, and pay-per-click (PPC) advertising to increase your online visibility, drive targeted traffic, and generate leads.</p>
 <a href='/contactus'>  <button className='get-in-btn nobg-btn m-3 mt-0'>GET A FREE QUOTE </button></a>
         
      </div>
  </div>    
  
  <img
    className="banner-imge-digital  "
    src= "https://img.webcodegenie.com/img/services/digital-marketing/digital-marketing.webp?ver=20230615133940"
    alt="First slide"
  />
  
  </div>
  
      </Carousel.Item>


      
    </Carousel>
  );
}

export default Carouseles;