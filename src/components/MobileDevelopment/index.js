import React from 'react'
import "./index.css"
import ServiceMobile from './ServiceMobile';


const MobileDevelopment = () => {

    
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Do something with the uploaded file
  };

  return (
    <div>
       
       
    <div>
      
      <div className='webdevelopment-top-card'>
      
      
       <div className='content-web'>
         <img alt='web' className='webdesin-imge'  src="https://img.webcodegenie.com/img/services/mobile-app/mobile-app-development.webp?ver=20230615133940"/>
         <h1>Mobile App Development Company</h1>
         <p>Embark on an extraordinary digital voyage with our esteemed mobile app development company. We are passionate mobile app developers, dedicated to crafting exceptional mobile app development services. Seamlessly blending innovation and expertise, we breathe life into your app ideas, providing tailor-made solutions that propel your business forward. Partner with us and witness the magic of our mobile app development prowess. Let's create unparalleled mobile experiences together</p>
       </div>

      
<div className='conatct-froms  shadow'>
<h4 className='pt-3'><b>Team Up with Our Web Developers</b></h4>
<p>Let's Begin the Conversation - Get in Touch Today!</p>
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
</div>

  </div>

{/* second componets */}

<div className=' p-5 new-comtainer  '>

<div className='secondd-card-imge cardss'>
<img alt="imge"  className='webdesin-imge' src='https://img.webcodegenie.com/img/services/mobile-app/mobile-apps.webp?ver=20230615133940'/>
</div>
<div className='content-web'>

    <h1> Transforming Visions With Mobile App Development</h1>
    <p>At our mobile app development company, we embark on a remarkable journey of crafting extraordinary experiences. With a touch of human brilliance, we bring your mobile app visions to life, surpassing expectations and captivating your audience.

</p>
<p>Our team of dedicated mobile app developers are true wizards, wielding cutting-edge technologies and boundless creativity. We are not just a company; we are artisans of mobile app development.

</p>

    </div>

</div>

{/* services include cards */}

<div className='service-include'>
<h5 className='small-heading'>DEVELOPMENT SERVICES</h5>
<h1 className='text'>Mobile App Development Service</h1>
<div>
 {/* <div className='element-card w-30 shadow'></div>  <div className='element-description w-70 shadow'></div> */}

<ServiceMobile/>

</div>
</div>

{/* Our technologies 

*/}

<div className='p-2'>
    <h5 className='text small-heading'>OUR TECHNOLOGIES</h5>
    <h1 className='text'>Mobile App Development Technologies</h1>
  <div className='technoligies-card-cantener'>

    <div className='img-conatener shadow'>
      <img className="webdesin-imge" src="https://img.webcodegenie.com/img/technology-use/Php.svg?ver=20230608134812" alt='imge'/>
      <p className='mt-3'><b>PHP</b></p>
    </div>   

    <div className='img-conatener shadow'>
      <img  className="imge-icons" src="https://img.webcodegenie.com/img/technology-use/Laravel.svg?ver=20230608134812" alt='imge'/>
      <p className='mt-3'><b>Laravel</b></p>
    </div>  

    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/technology-use/NodeJs.svg?ver=20230608134812" alt='imge'/>
      <p className='mt-3'><b>NodeJs</b></p>
    </div>  

    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/technology-use/ExpressJs.svg?ver=20230608134812" alt='imge'/>
      <p className='mt-3'><b>ExpressJs</b></p>
    </div>   
    
    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/technology-use/angular.svg?ver=20230608134812" alt='imge'/>
      <p className='mt-3'><b>Angular</b></p>
    </div> 


    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/technology-use/react.svg?ver=20230608134812" alt='imge'/>
      <p className='mt-3'><b>React</b></p>
    </div> 

  {/*  <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/technology-use/SocketIo.svg?ver=20230608134812" alt='imge'/>
      <p className='mt-3'><b>SocketIo</b></p>
    </div> */}

    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/technology-use/Lumen.svg?ver=20230608134812" alt='imge'/>
      <p className='mt-3'><b>Lumen</b></p>
    </div> 

    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/technology-use/Radis.svg?ver=20230608134812" alt='imge'/>
      <p className='mt-3'><b>Radis</b></p>
    </div> 

    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/technology-use/mysql.svg?ver=20230608134812" alt='imge'/>
      <p className='mt-3'><b>Mysql</b></p>
    </div>   


    <div className='img-conatener border-conatiner shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/technology-use/MongoDB.svg?ver=20230608134812" alt='imge'/>
      <p className='mt-3'><b>MongoDB</b></p>
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

export default MobileDevelopment