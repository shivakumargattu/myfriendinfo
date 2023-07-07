import Carousel from 'react-bootstrap/Carousel';

import "./index.css"

function Carouseles() {
  return (
    <Carousel className='bg-carosuel' >
    
      <Carousel.Item>
    <div  className='carousel-content'>
  

        <div className='content-text-upwords'>
        <div className='carosel-conatiner-text p-4 pb-3'>
            <h1 className='carosel-mai-heading'>Web Development</h1>
            <h4 className='carosel-sub-head'>Making Online Experiences Stand Out from the Competition</h4>
            <p className='carosel-description'>Our web development services offer unique options that are tailored to the requirements of your company. Our skilled developers will bring your perspective to life whether you need a straightforward brochure website or an elaborate e-commerce platform.</p>
           
      <a href='/contactus'>     <button className='get-in-btn nobg-btn m-3 mt-0'>GET A FREE QUOTE </button></a>
            </div>
        </div>    
        <div className="banner-imge-digital-imges">
        <img
          className=" imges-oreder w-100 h-100 "
          
           src="https://findappguru.com/wp-content/uploads/2020/10/Software-enterprise-companies-1250x768.jpg" alt="image-1" border="0"
        />
        
        </div>
        </div>
        
      
      </Carousel.Item>


      <Carousel.Item>
      <div  className='carousel-content d-flex'>
  

  <div className='content-text-upwords '>
  <div className='carosel-conatiner-text p-3 pb-3'>
      <h1 className='carosel-mai-heading app-develop-main-heading'>Mobile Development</h1>
      <h4 className='carosel-sub-head'> We Offer Best Services; Come Discuss PPC
E-commerce software creation
</h4>
      <p className='carosel-description'>
Our digital marketing services make your company stand out in the fiercely competitive online environment. To increase your online visibility, drive targeted traffic, and produce leads, we use efficient strategies like search engine optimization ( SEO ), social media marketing, pay-per-click( PPC ) advertising.</p>
  <a href='/contactus'>    <button className='get-in-btn nobg-btn m-3 mt-0'>GET A FREE QUOTE </button></a>
         
      </div>
  </div>    
  <div className="banner-imge-digital-imges">
  <img
    className="  imges-oreder w-100"
    src= "https://www.gunaatita.com/Content/new-gt/img/business-continuty-plan.jpg"  border="0"
    alt="First slide"
  />
  </div>
  
  </div>
  
      </Carousel.Item>



      <Carousel.Item>
      <div  className='carousel-content d-flex'>
  

  <div className='content-text-upwords'>
  <div className='carosel-conatiner-text pb-3'>
      <h1 className='carosel-mai-heading'>Digital Marketing</h1>
      <h4 className='carosel-sub-head'> We Provide Best Let's Talk about SMM <br/> E-commerce app development</h4>
      <p className='carosel-description'>In the highly competitive digital landscape, our digital marketing services help your business stand out. We employ effective strategies such as search engine optimization (SEO), social media marketing, and pay-per-click (PPC) advertising to increase your online visibility, drive targeted traffic, and generate leads.</p>
 <a href='/contactus'>  <button className='get-in-btn nobg-btn m-3 mt-0'>GET A FREE QUOTE </button></a>
         
      </div>
  </div>    
  <div className="banner-imge-digital-imges">
  <img
     className="  imges-oreder w-100"
    src= "https://insights.ricoh.co.uk/wp-content/uploads/2019/12/GettyImages-1154382592.jpg"
    alt="First slide"
  />
  </div>
  </div>
  
      </Carousel.Item>


      
    </Carousel>
  );
}

export default Carouseles;