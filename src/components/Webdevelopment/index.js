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
                 </div>
                 <div className='webdevelopment-text-content'>
                 <h1>Web Development Company</h1>
                 <p>We are the leading and most trustable web development company specializing in Custom Web Development services. Our expertise and experience in developing web-based solutions will revolutionize your business, thereby establishing your brand identity.</p>
               <p>Set out on a computerized venture like no other with My Friend Info Solutions, where creative mind meets reality. Our web improvement organization is filled by an energy for making phenomenal internet based encounters. We weave enchantment through charming plans, consistent usefulness, and future-confirmation arrangements that sling your business higher than ever. We should cooperate to make your computerized desires a reality.</p>
                 </div>

              
    {/*  <div className='conatct-froms  shadow'>
      <h4 className='p-5 pb-0'><b>Team Up with Our Web Developers</b></h4>
      <p className=''>Let's Begin the Conversation <br/> - Get in Touch Today!</p>
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
       
       <div className='content-web'>
        
            <h1> Head Web Improvement Organization</h1>
              <p> My Friends info solutions
              Pvt Ltd. offers result-oriented and cost-effective web development services. Our expert developers specialize in creating advanced systems that handle high volumes of transactions and data. Contact us to learn how we can help your business achieve its digital goals.
              We offer custom web development services that aim to solve your business challenges by simplifying the deployment of marketing strategies and processes. Our team's deep understanding of web application development technology, creative skills, and business knowledge has enabled us to deliver fast, measurable growth and results on the internet.</p>
             <p>-Using Digital Innovation to Create Beautiful Online Experiences</p>
              <p>-Innovative Business Practises to Promote Success</p>
             <p>-Developing Cutting-Edge Solutions to Elevate Brands and Turn Visions into Digital Reality</p>

       </div>
       
       <div className=' secondd-card-imge'>
        <img alt="imge" className='webdesin-imge' src='https://img.webcodegenie.com/img/what-we-do/web-development.webp?ver=20230608134812'/>
       </div>

      </div>

      {/*services include cards */}

      <div className='service-include'>
        <h5 className='small-heading pt-3'>SERVICES INCLUDE</h5>
        <h1 className='text pb-5'>Web Development Services</h1>
        <div>
          <div className='element-card w-30 shadow'></div>  <div className='element-description w-70 shadow'></div> 
   
         <ServiceInclude/>
        </div>
      </div> 

      <div className='service-include'>
        <h1 className='text pb-5'>The Value Of Professional Web Development For Businesses

</h1>
<div className=' p-5 web-second-card'>

<div className='content-web'>
  <p>Professional web development ensures that your online presence is a potent tool for growth in addition to producing an aesthetically pleasing website. In order to create a website that perfectly reflects your brand identity, developers must first understand your business objectives and target market. They build a website that not only attracts attention but also encourages meaningful interactions by paying close attention to detail and taking a user-centric approach.

Successful online businesses are built on a foundation of user-friendly websites. The user experience is the main focus of expert developers, who make interactions and navigation simple. Your website adapts seamlessly to various devices and screen sizes by using responsive design techniques. Your customers will have a consistent and interesting experience whether they access your site on a desktop, tablet, or mobile phone. This improves</p>
<p>It's crucial to stay on top of technological advancements because the digital landscape is constantly changing. Professional web developers keep up with the most recent tools, technologies, and trends and incorporate them into the creation of your website. They offer visitors an engaging and modern experience by embracing emerging technologies.
</p>
</div>
<div>
<img src="https://i.ibb.co/pfGSHWr/image-4.png" alt="image-4" border="0"/>
</div>
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
