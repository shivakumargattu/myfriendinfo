import React from 'react'
import ServiceSoftware from './ServiceSoftware';
import "./index.css"


const SoftwareTesting = () => {

    
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Do something with the uploaded file
  };

  return (
    <div>
       
       
    <div>
      
      <div className='webdevelopment-top-card'>
      
      
       <div className='content-web '>
         <img alt='web' className='webdesin-imge '  src="https://img.webcodegenie.com/img/services/qa/qa-testing.webp?ver=20230615133940"/>
         <h1>Software QA Testing Company</h1>
         <p>Delivering excellence in software testing services, we are your trusted QA testing company for ensuring flawless digital experiences. With our meticulous approach, we identify even the most elusive bugs, guaranteeing a seamless and reliable product. Our experienced team combines manual and automated testing methods, leveraging cutting-edge technologies to accelerate your time to market. From functional testing to performance and security testing, we cover every aspect to deliver top-tier software quality assurance services.

</p>
       </div>

      
<div className='conatct-froms  shadow'>
<h4 className='p-5 pb-0'><b>Enhancing Software Excellence<br/> QA Testing
</b></h4>
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
<div className='second-content-componet'>
<div className='imge-conainer-testing' >
<img alt="imge" className='webdesin-imge ' src='https://img.webcodegenie.com/img/services/qa/software-qa-testing.webp?ver=20230615133940'/>
</div>

<div className='content-web'>

    <h1>Enhancing Software Excellence: QA Testing</h1>
<p>Welcome to the enchanting world of Quality Nexus, where we weave magic into software QA testing. Our skilled sorcerers of quality assurance combine their expertise with cutting-edge tools to deliver flawless digital experiences. With our meticulous approach, we cast spells to uncover even the trickiest bugs, ensuring a seamless and reliable product.

</p>
<p>From functional testing enchantments to performance and security wizardry, we cover every aspect to empower your software. Our potions of automated testing accelerate your time to market, while our mobile app testing and usability charms enhance the user experience. With regression sorcery, we safeguard against any unforeseen regressions, maintaining the stability of your software.
</p>

</div>
</div>

{/* services include cards */}

<div className='service-include'>
<h5 className='small-heading'>TESTING SERVICES</h5>
<h1 className='text'>Software QA Testing Services</h1>
<div>
 {/* <div className='element-card w-30 shadow'></div>  <div className='element-description w-70 shadow'></div> */}

<ServiceSoftware/>
</div>
</div>

{/* Our technologies 

*/}

<div className='p-2'>
    <h5 className='text small-heading'>OUR TECHNOLOGIES</h5>
    <h1 className='text'>Software QA Testing Technologies</h1>
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

export default SoftwareTesting