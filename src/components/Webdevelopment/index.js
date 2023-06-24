import React from 'react'
import "./index.css"
import ServiceInclude from './ServiceInclude';

const Webdevlopment = () => {
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Do something with the uploaded file
  };

  return (
    <div>
      
              <div className='webdevelopment-top-card'>
              
               <div className='content-web '>
                 <img alt='web' className='webdesin-imge'  src="https://img.webcodegenie.com/img/web-development/banner-img.svg?ver=20230608134812"/>
                 <h1>Web Development Company</h1>
                 <p>We are the leading and most trustable web development company specializing in Custom Web Development services. Our expertise and experience in developing web-based solutions will revolutionize your business, thereby establishing your brand identity.</p>
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
  
      <div className=' p-5 web-second-card'>
       
       <div className=' secondd-card-imge'>
        <img alt="imge" className='webdesin-imge' src='https://img.webcodegenie.com/img/what-we-do/web-development.webp?ver=20230608134812'/>
       </div>
       <div className='content-web'>
        
            <h1> Premier Web Development Company</h1>
              <p> My Friends info solutions
              Pvt Ltd. offers result-oriented and cost-effective web development services. Our expert developers specialize in creating advanced systems that handle high volumes of transactions and data. Contact us to learn how we can help your business achieve its digital goals.
              We offer custom web development services that aim to solve your business challenges by simplifying the deployment of marketing strategies and processes. Our team's deep understanding of web application development technology, creative skills, and business knowledge has enabled us to deliver fast, measurable growth and results on the internet.</p>
       </div>

      </div>

      {/* services include cards */}

      <div className='service-include'>
        <h5 className='small-heading pt-3'>SERVICES INCLUDE</h5>
        <h1 className='text pb-5'>Web Development Services</h1>
        <div>
         {/* <div className='element-card w-30 shadow'></div>  <div className='element-description w-70 shadow'></div> */}
   
   <ServiceInclude/>
        </div>
      </div>

    {/* Our technologies 

     */}

        <div className='p-2'>
            <h5 className='text small-heading pt-4'>OUR TECHNOLOGIES</h5>
            <h1 className='text pb-4 pt-3'>Web Development Technologies</h1>
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

                <div className='img-conatener  shadow'>
              <img className="imge-icons" src="https://img.webcodegenie.com/img/services/industries/logistics-and-transport.svg?ver=20230615133940" alt='imge'/>
              <p className='mt-3  '><b>Gaming & Enterteainment</b></p>
                </div>   
              
           </div>
           </div>
             </div>
      </div>

    </div>
  )
}

export default Webdevlopment;
