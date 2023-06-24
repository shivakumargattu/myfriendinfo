import React from 'react'
import "./index.css"
import ProjectNums from './ProjectNums'

const AboutUsRouter = () => {
  return (
    <>
        <div className='about-container about'>


<h1 className='text m-5'>About My Friend Info Solutions</h1>
 </div>
   <div className='d-flex '>
    <div className='box' >
       
       <h5 className='about-heading'> Empowering Your Digital Success with Cutting-Edge Technologies</h5>
      <p className='about-description'>At My Friend Info Solutions Pvt. Ltd we believe in constantly evolving. Website Designing is our passion and we never compromise on quality. We have been in the Web Designing business for over 2+ years now, and while the passion still burns strong, the years of experience have added many strengths to our repertoire. Now we have 150+ Customers in India and Abroad as well.We are always working with new technologies to give the best quality of output. We have very good experienced designers and developers for giving quality work on time. We have our own Servers in Top Data Centers (India and US) for giving the best hosting solution. We are Registered Domain Name Providers in India We offer domain names at best price. We have direct Connectivity for Mobile Operators to give Best Bulk SMS and Voice SMS Solution in India. 

</p>
        </div>


        <div className='w-100'>

        <img alt='img' src='https://myfriend.net.in/wp-content/uploads/2020/02/image1-about.png'/>
      
        </div>
          
          </div>     
        
        <div className='about-middel'>
            <div className='imge-about'>
                <img alt="imge" className='' src="https://myfriend.net.in/wp-content/uploads/2020/01/pic1-service1.png"/>
            </div>
            <div className='about-us-descrip box2'>
                <h1>Our Vision</h1>
                <p>At My Friend Info Solutions Pvt. Ltd envisions empowering businesses of all scales to realize their objectives by leveraging our advanced and adaptable digital solutions. We aspire to become a dependable and valued ally to our clients, surpassing their expectations with top-tier services that give them a competitive edge. Our philosophy is grounded in putting the customer at the center, nurturing long-lasting partnerships with clients, recognizing their distinct requirements, and providing customized solutions that create tangible benefits. Our goal is to lead the way in the digital realm, spearheading innovation and distinction across all our operations.

</p>
            </div>
        </div>


<div className=' m-5 w-100% p-5'>
    <ProjectNums/>
</div>
    
    </>
  )
}

export default AboutUsRouter
