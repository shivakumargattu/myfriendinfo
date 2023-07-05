import React from 'react'
import Card from 'react-bootstrap/Card';
import "./index.css"
import Counter from './Counter';


const About = () => {
  return (
    
      <>

      <div className='about-container'>

     <h5 className='text small-heading'>About Us</h5>
     <h1 className='text'>About My Friend Info Solutions</h1>
      </div>


        <div className='cards-of-tech'>

          <div className='about-imge-con'><img className='100' src="https://myfriend.net.in/wp-content/uploads/2020/02/image1-about.png" alt="abouts"/></div>
         <div className="" > 
            <h5 className='about-heading pl-3'> Empowering Your Digital Success with Cutting-Edge Technologies</h5>
           <p className='about-description'>My Friend Info Solutions PVT Ltd for unparalleled web and mobile app development services.we have a proven track record of helping startups, mid-size companies, and enterprises across diverse industries since our establishment in 2021. We value long-term business relationships, which is why our loyal clientele have been with us from the very beginning. Our team of top web and mobile app developers is committed to delivering customized solutions that will elevate your digital journey and exceed your expectations. Discover why clients worldwide trust us for their most complex and intriguing projects
             </p>
             {/* <button className='get-in-btn nobg-btn'>BEHIDE THE SCENES </button> */}
          </div> 
          
           
             
             
         </div>
         <div>
               <Counter/>
             </div>
    </>
  )
}

export default About

