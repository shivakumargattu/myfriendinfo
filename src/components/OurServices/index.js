import React from 'react'
import "./index.css"

const OurServices = () => {
  return (
    <div className='ourservies-bg-contener' >
    <h5 className='text small-heading'>SERVICES</h5>
    <h1 className='text'>Delivering Excellence With Our Services</h1>
   
    <div className=' servies-card-cantener'>
    <div class="ourservice-card">
    <img alt='imge' src='https://img.webcodegenie.com/img/home/what-we-do/webdesign.svg?ver=20230608134812'/>
  
  <div className="container">
    <h4><b>Web Development</b></h4>
    <p>	Revolutionize your online presence with our expert web development services - stunning design, seamless functionality, unmatched performance.

</p>
  </div>
  </div>

  <div class="ourservice-card">
  <img src="https://img.webcodegenie.com/img/home/what-we-do/webdevlopment.svg?ver=20230608134812" alt="alt"/>
  <div className="container pt-3">
    <h4><b>Web Design</b></h4>
    <p>					     
    Elevate your digital presence with our expert web design services - captivating visuals, intuitive navigation, unmatched user experience.
</p>
</div>
  </div>
  <div class="ourservice-card">
  <img  src="https://img.webcodegenie.com/img/home/what-we-do/appdevelopment.svg?ver=20230608134812" alt="imge"/>
  <div className="container pt-3">
    <h4><b>Mobile App Development</b></h4>
<p>Transform your digital vision into a stunning mobile reality with our expert mobile app development services dynamic, game-changing.

</p>
  </div>
  </div>
  <div class="ourservice-card">
  <img src="https://img.webcodegenie.com/img/home/what-we-do/software-testing.svg?ver=20230608134812" alt="imge"/>
  <div className="container pt-3">
    <h4><b>SoftWare Testing</b></h4>
    <p>Empowering your digital success with our expert software testing services - seamless performance, exceptional user experience, unmatched quality. always solving problems.				        </p>
  </div>
  </div>

  <div class="ourservice-card">
  <img src="https://img.webcodegenie.com/img/home/what-we-do/digitalmarketing.svg?ver=20230608134812" alt="img"/>
  <div className="container pt-3">
  <h4>Digital Marketing</h4>
    <p>Elevate your brand with our expert digital marketing services - targeted strategies, measurable results, unmatched ROI.

</p>
      </div>
  </div>
    </div>
    </div>
    
  )
}

export default  OurServices
