import React from 'react'
import "./index.css"
import ProjectNums from './ProjectNums'

const AboutUsRouter = () => {
  return (
    <>
        <div className='about-router-bg-conatiner'>


<h1 className='text m-5'>About My Friend Info Solutions</h1>
 </div>
   <div className='about-router-container '>
    <div className="about-router-card-conatiner" >
       
       <h5> Empowering Your Digital Success with Cutting-Edge Technologies</h5>
      <p >My Friend Info Solutions PVT Ltd for unparalleled web and mobile app development services.we have a proven track record of helping startups, mid-size companies, and enterprises across diverse industries since our establishment in 2021. We value long-term business relationships, which is why our loyal clientele have been with us from the very beginning. Our team of top web and mobile app developers is committed to delivering customized solutions that will elevate your digital journey and exceed your expectations. Discover why clients worldwide trust us for their most complex and intriguing projects.</p>
        </div>
        <div className='about-router-imge-conatiner'>

        <img alt='img' className='w-100' src='https://myfriend.net.in/wp-content/uploads/2020/02/image1-about.png'/>
      
        </div>
          
          </div>     
        
        <div className='about-router-container '>
            <div className='about-router-imge-conatiner'>
                <img alt="imge" className='w-100' src="https://myfriend.net.in/wp-content/uploads/2020/01/pic1-service1.png"/>
            </div>
            <div className='about-router-card-conatiner'>
                <h1>Our Vision</h1>
                <p>At My Friend Info Solutions Pvt. Ltd envisions empowering businesses of all scales to realize their objectives by leveraging our advanced and adaptable digital solutions. We aspire to become a dependable and valued ally to our clients, surpassing their expectations with top-tier services that give them a competitive edge. Our philosophy is grounded in putting the customer at the center, nurturing long-lasting partnerships with clients, recognizing their distinct requirements, and providing customized solutions that create tangible benefits. Our goal is to lead the way in the digital realm, spearheading innovation and distinction across all our operations.

</p>
            </div>
        </div>


<div className=' m-5 w-90% p-5'>
    <ProjectNums/>
</div>
    
    </>
  )
}

export default AboutUsRouter
