import React from 'react'
import "./index.css"
import ServiceWebdesign from './ServiceWebdesign';


const Webdesign = () => {

    
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Do something with the uploaded file
  };

  return (
    <div>
       
       
    <div>
      
      <div className='webdevelopment-top-card'>
      
      
       <div className='content-web'>
         <img alt='web' className='imge-card-top'  src="https://wepik.com/api/image/ai/609d26dc-37e7-4ae3-afb6-72cbe8aecdc6"/>
        
       </div >
       <div className='webdevelopment-text-content'>
       <h1>Web Design Company</h1>
         <p>Welcome to our extraordinary web design company, where digital dreams come to life! With our unparalleled creativity and expertise, we craft visually stunning and user-friendly websites that leave a lasting impression. Elevate your online presence with our captivating designs, tailored to showcase your brand's unique story and captivate your target audience. Experience the magic of seamless navigation, cutting-edge features, and responsive design, all meticulously crafted to drive conversions and exceed your expectations.
</p>
        </div>
      
{/*<div className='conatct-froms shadow'>
<h4 className='p-5 pb-0'><b>Consult Our Webdesign Developers</b></h4>
<p>Let's Begin the Conversation <br/>- Get in Touch Today!</p>
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

<div className=' p-5 web-second-card'>

<div className='secondd-card-imge cardss'>
<img alt="imge" className='webdesin-imge' src='https://img.webcodegenie.com/img/services/web-design/web-design.webp?ver=20230615133940'/>
</div>
<div className='content-web'>

    <h1> Elevate Your Business With Exceptional Web Design</h1>
      <p>Step into the realm of our exceptional web design company, where we weave the finest threads of creativity and expertise to craft awe-inspiring online experiences. As visionary web designers, we transcend the ordinary, delivering web designing services that leave a lasting imprint on your brand's digital landscape.
<br/>
<br/>
With our team of skilled web designers, we meticulously sculpt pixel-perfect designs that seamlessly blend aesthetics and functionality. Our web designing services encompass every aspect of your online presence, from captivating visuals to intuitive user experiences.
<br/>


At the heart of our enchanting creations lies a deep understanding of the intricacies of web design.
</p>
</div>

</div>

{/* services include cards */}

<div className='service-include'>
<h5 className='small-heading'>DESIGNING SERVICES</h5>
<h1 className='text'>Website Designing Services</h1>
<div>

<ServiceWebdesign/>
</div>
</div>

{/* Our technologies 

*/}

<div className='p-2'>
    <h5 className='text small-heading'>OUR TECHNOLOGIES</h5>
    <h1 className='text'>Web Design Technologies</h1>
  <div className='technoligies-card-cantener'>

    <div className='img-conatener shadow'>
      <img className="imge-icons" src="https://img.webcodegenie.com/img/technology-use/Php.svg?ver=20230608134812" alt='imge'/>
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

export default Webdesign
