import React from 'react'
import "./index.css"
import ServicesDigital from './ServicesDigital';

const DigitalMarketing = () => {

    
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Do something with the uploaded file
  };

  return (
    <div>
       
       
    <div>
      
      <div className='webdevelopment-top-card'>
      
      
       <div className='content-web '>
         <img alt='web' className='webdesin-imge'  src="https://img.webcodegenie.com/img/services/digital-marketing/digital-marketing-so-important.webp?ver=20230615133940"/>
       
       </div>


<div className='webdevelopment-text-content'>

<h1>Digital Marketing Agency</h1>
         <p>We are a leading digital marketing agency that specializes in driving growth and delivering results. With our strategic approach, innovative solutions, and deep expertise, we help businesses thrive in the digital landscape. Harness the power of our data-driven strategies and unlock your brand's full potential. Let's elevate your online presence together.
</p>
<p>Through strategic planning, we harness the power of data-driven insights to develop tailored marketing solutions that resonate with your target market. From captivating content that tells your brand's unique story to impactful social media campaigns that spark conversations, we fuel your growth by creating meaningful connections.</p>
</div>
      
{/*<div className='conatct-froms shadow'>
<h4 className='p-5 pb-0'><b>Team Up with Our Digital Marketing<br/> Experts
</b></h4>
<p>Let's Begin the Conversation<br/> - Get in Touch Today!</p>
<form className="my-form">


<input type="text" className='input-flids' placeholder='Full Name*' required />
<br/>


<input type="email" id="email" className='input-flids' placeholder="Email*"  name="email" required />
<br/>

<input type="number" id="phone" className='input-flids' placeholder="Phnoe Number*"  name="phone" required />
<br/>
<input type="file" id="file" className='input-flids' name="file" onChange={handleFileChange} />
<br/>

<textarea id="message" name="message" placeholder='Message*' required></textarea><br/>


<button type="submit" className='get-in-btn nobg-btn'>Submit</button>
</form> 
</div>*/}

  </div>

{/* second componets */}

<div className=' p-5 webdevelopment-top-card'>


     <div className='content-web '>

    <h1> Fueling Growth With Dynamic Digital Marketing</h1>
      <p> In today's digital landscape, fueling your brand's growth requires more than just a strong presence – it demands dynamic digital marketing strategies that captivate and inspire. At our agency, we specialize in the art of creating magical experiences that engage your audience and propel your brand forward.
      <br/>
      <br/>

Through strategic planning, we harness the power of data-driven insights to develop tailored marketing solutions that resonate with your target market. From captivating content that tells your brand's unique story to impactful social media campaigns that spark conversations, we fuel your growth by creating meaningful connections.
<br/>

</p>
     </div>
     
     <div className='secondd-card-imge w-50 '>
<img alt="imge" className='webdesin-imge' src='https://img.webcodegenie.com/img/services/digital-marketing/digital-marketing.webp?ver=20230615133940'/>
      </div>

</div>

{/* services include cards */}

<div className='service-include'>
<h5 className='small-heading'>MARKETING SERVICES
</h5>
<h1 className='text'>Digital Marketing Services</h1>
<div>
 {/* <div className='element-card w-30 shadow'></div>  <div className='element-description w-70 shadow'></div> */}

<ServicesDigital/>

</div>
</div>

{/* Our technologies 

*/}

<div className='p-2'>
    <h5 className='text small-heading'>OUR TECHNOLOGIES</h5>
    
  <div className='technoligies-card-cantener'>

    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/services/digital-marketing/search-engine-optimization.svg?ver=20230615133940" alt='imge'/>
      <p className='mt-3'><b>SEO</b></p>
    </div>   

    <div className='img-conatener shadow'>
      <img  className="imge-icons" src="https://img.webcodegenie.com/img/services/digital-marketing/ppc-advertising.svg?ver=20230615133940" alt='imge'/>
      <p className='mt-3'><b>PPC</b></p>
    </div>  

    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/services/digital-marketing/social-media-marketing.svg?ver=20230615133940" alt='imge'/>
      <p className='mt-3'><b>Social Media Marketing</b></p>
    </div>  

    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/services/digital-marketing/content-marketing.svg?ver=20230615133940" alt='imge'/>
      <p className='mt-3'><b>Content Marketing</b></p>
    </div>   
    
    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/services/digital-marketing/email-marketing.svg?ver=20230615133940" alt='imge'/>
      <p className='mt-3'><b>Email Marketing</b></p>
    </div> 


    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/services/digital-marketing/analytics-and-reporting.svg?ver=20230615133940" alt='imge'/>
      <p className='mt-3'><b>Analytics And Reporting</b></p>
    </div> 

  



   </div>
 </div>

{/* industries*/}

<div className='p-2'>
       <h5 className='text small-heading'>INDUSTRIES WE SERVE</h5>
       <h1 className='text'>Our Diverse Industry Expertise</h1>

       <div class="marquee-container">
<div class="marquee-content">
    <div className='industries-card-cantener'>
  
  
       <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/services/industries/banking-and-finance.svg?ver=20230615133940" alt='imge'/>
      <p className='mt-3'><b>Banking And Finance</b></p>
        </div>   

        <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/services/industries/social-networking.svg?ver=20230615133940" alt='imge'/>
      <p className='mt-3'><b>Social & Networking</b></p>
        </div>   


          <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/services/industries/retail-ecommerce.svg?ver=20230615133940" alt='imge'/>
      <p className='mt-3'><b>Retail & Ecommerce</b></p>
        </div>   


       <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/services/industries/construction-engineering.svg?ver=20230615133940" alt='imge'/>
      <p className='mt-3'><b>Information Technologie</b></p>
        </div>   

        <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/services/industries/logistics-and-transport.svg?ver=20230615133940" alt='imge'/>
      <p className='mt-3'><b>Gaming & Enterteainment</b></p>
        </div>   
      
   </div>
   </div>
     </div>
</div>

</div>

    </div>
  )
}

export default DigitalMarketing